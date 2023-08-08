import { join } from 'path';
import react from '@vitejs/plugin-react';
import mdx from '../plugin/index.js';
import { injectHtml } from 'vite-plugin-html';
import { ES_DIR, SITE_DIST_DIR, SITE_SRC_DIR } from '../common/constant.js';
import { setBuildTarget, getVantConfig, isDev } from '../common/index.js';
import { genSiteMobileShared } from '../compiler/gen-site-mobile-shared.js';
import { genSiteDesktopShared } from '../compiler/gen-site-desktop-shared.js';
import { genPackageStyle } from '../compiler/gen-package-style.js';
import { genDemoMobileShared } from '../compiler/gen-demo-mobile-shared.js';
import { CSS_LANG } from '../common/css.js';
import type { InlineConfig, PluginOption } from 'vite';

function getSiteConfig(vantConfig: any) {
  const siteConfig = vantConfig.site;

  if (siteConfig.locales) {
    return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
  }

  return siteConfig;
}

function getTitle(config: { title: string; description?: string }) {
  let { title } = config;

  if (config.description) {
    title += ` - ${config.description}`;
  }

  return title;
}

function getHTMLMeta(vantConfig: any) {
  const meta = vantConfig.site?.htmlMeta;

  if (meta) {
    return Object.keys(meta)
      .map((key) => `<meta name="${key}" content="${meta[key]}">`)
      .join('\n');
  }

  return '';
}

function vitePluginGenVantBaseCode(): PluginOption {
  const virtualMobileModuleId = 'site-mobile-shared';
  const resolvedMobileVirtualModuleId = `rc-cli:${virtualMobileModuleId}`;

  const virtualMobileDemoId = 'site-mobile-demo';
  const resolvedMobileVirtualDemoId = `rc-cli:${virtualMobileDemoId}`;

  const virtualDesktopModuleId = 'site-desktop-shared';
  const resolvedDesktopVirtualModuleId = `rc-cli:${virtualDesktopModuleId}`;

  const virtualPackageStyleModuleId = /package-style/;
  const resolvedPackageStyleVirtualModuleId = `rc-cli${virtualPackageStyleModuleId}index.${CSS_LANG}`;

  return {
    name: 'vite-plugin(rc-cli):gen-site-base-code',
    resolveId(id) {
      if (id === virtualMobileModuleId) {
        return resolvedMobileVirtualModuleId;
      }

      if (id === virtualMobileDemoId) {
        return resolvedMobileVirtualDemoId;
      }

      if (id === virtualDesktopModuleId) {
        return resolvedDesktopVirtualModuleId;
      }

      if (virtualPackageStyleModuleId.test(id)) {
        return resolvedPackageStyleVirtualModuleId;
      }
    },
    load(id) {
      switch (id) {
        case resolvedMobileVirtualModuleId:
          return genSiteMobileShared();
        case resolvedMobileVirtualDemoId:
          return genDemoMobileShared();
        case resolvedDesktopVirtualModuleId:
          return genSiteDesktopShared();
        case resolvedPackageStyleVirtualModuleId:
          return genPackageStyle();
        default:
          break;
      }
    },
  };
}

export function getViteConfigForSiteDev(): InlineConfig {
  setBuildTarget('site');

  const vantConfig = getVantConfig();
  const siteConfig = getSiteConfig(vantConfig);
  const title = getTitle(siteConfig);
  const headHtml = vantConfig.site?.headHtml;
  const enableVConsole = isDev() && vantConfig.site?.enableVConsole;

  return {
    root: SITE_SRC_DIR,

    optimizeDeps: {
      // https://github.com/youzan/vant/issues/10930
      include: ['react', 'react-dom', 'react-router-dom'],
    },

    plugins: [
      vitePluginGenVantBaseCode(),
      react(),
      mdx(),
      injectHtml({
        data: {
          ...siteConfig,
          title,
          // `description` is used by the HTML ejs template,
          // so it needs to be written explicitly here to avoid error: description is not defined
          description: siteConfig.description,
          headHtml,
          enableVConsole,
          meta: getHTMLMeta(vantConfig),
        },
      }),
    ],

    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    resolve: {
      alias: {
        'rc-ui-lib': ES_DIR,
      },
    },
  };
}

export function getViteConfigForSiteProd(): InlineConfig {
  const devConfig = getViteConfigForSiteDev();
  const vantConfig = getVantConfig();
  const outDir = vantConfig.build?.site?.outputDir || SITE_DIST_DIR;
  const publicPath = vantConfig.build?.site?.publicPath || '/';

  return {
    ...devConfig,
    base: publicPath,
    build: {
      outDir,
      reportCompressedSize: false,
      emptyOutDir: true,
      // https://github.com/vant-ui/vant/issues/9703
      cssTarget: ['chrome53'],
      rollupOptions: {
        input: {
          main: join(SITE_SRC_DIR, 'index.html'),
          mobile: join(SITE_SRC_DIR, 'mobile.html'),
        },
        output: {
          manualChunks: {
            'react-libs': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
  };
}
