import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import Icon from '../icon';
import Overlay from '../overlay';
import useEventListener from '../hooks/use-event-listener';
import { useLockScroll } from '../hooks/use-lock-scroll';

import { isDef } from '../utils';
import { PopupInstanceType, PopupProps } from './PropsType';
import { callInterceptor } from '../utils/interceptor';
import { renderToContainer } from '../utils/dom/renderToContainer';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import PopupContext from './PopupContext';

export const sharedPopupProps = [
  'round',
  'zIndex',
  'closeable',
  'overlay',
  'overlayClass',
  'overlayStyle',
  'destroyOnClose',
  'mountOnEnter',
  'lockScroll',
  'duration',
  'transition',
  'closeOnClickOverlay',
  'closeOnPopstate',
  'onClickOverlay',
  'safeAreaInsetBottom',
  'onOpen',
  'onClose',
  'onOpened',
  'onClosed',
  'beforeClose',
] as const;

let globalZIndex = 2000;

const Popup = forwardRef<PopupInstanceType, PopupProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('popup', prefixCls);

  const { round, visible, closeable, title, description, children, duration, closeIcon, position } =
    props;
  const opened = useRef(false);
  const zIndex = useRef<number>(props.zIndex ?? globalZIndex);
  const popupRef = useRef<HTMLDivElement>();
  const [animatedVisible, setAnimatedVisible] = useState(visible);

  const style = useMemo(() => {
    const initStyle = {
      zIndex: zIndex.current,
      ...props.style,
    };

    if (isDef(props.duration)) {
      const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = `${props.duration}ms`;
    }
    return initStyle;
  }, [zIndex.current, props.style, props.duration]);

  const open = () => {
    zIndex.current = props.zIndex !== undefined ? +props.zIndex : globalZIndex++;
    opened.current = true;
    props.onOpen?.();
  };

  const close = () => {
    if (opened.current) {
      callInterceptor({
        interceptor: props.beforeClose,
        args: ['close'],
        done: () => {
          opened.current = false;
          props.onClose?.();
        },
      });
    }
  };

  const onClickOverlay = (event) => {
    props.onClickOverlay?.(event);

    if (props.closeOnClickOverlay) {
      close();
    }
  };

  const renderOverlay = () => {
    if (props.overlay) {
      return (
        <Overlay
          visible={visible}
          lockScroll={props.lockScroll}
          className={props.overlayClass}
          customStyle={props.overlayStyle}
          zIndex={zIndex.current}
          duration={duration}
          onClick={onClickOverlay}
        />
      );
    }
    return null;
  };

  const onClickCloseIcon = (e) => {
    if (props.onClickCloseIcon) {
      props.onClickCloseIcon(e);
    }
    close();
  };

  const renderCloseIcon = () => {
    if (closeable) {
      const { closeIconPosition } = props;
      if (typeof closeIcon === 'string') {
        return (
          <Icon
            name={closeIcon}
            className={classnames(bem('close-icon', closeIconPosition))}
            classPrefix={props.iconPrefix}
            onClick={onClickCloseIcon}
          />
        );
      }
      return (
        <div
          className={classnames(bem('close-icon', closeIconPosition))}
          onClick={onClickCloseIcon}
        >
          {closeIcon}
        </div>
      );
    }
    return null;
  };

  const renderTitle = () => {
    if (title) {
      return <div className={classnames(bem('title'))}>{title}</div>;
    }
    return null;
  };

  const renderDescrition = () => {
    if (description) {
      return <div className={classnames(bem('description'))}>{description}</div>;
    }
    return null;
  };

  const renderPopup = () => {
    const { safeAreaInsetBottom } = props;
    return (
      <div
        ref={popupRef}
        style={{
          ...style,
          display: !animatedVisible ? 'none' : undefined,
        }}
        className={classnames(
          bem({
            round,
            [position]: position,
          }),
          { 'rc-safe-area-bottom': safeAreaInsetBottom },
          props.className,
        )}
        onClick={props.onClick}
        onMouseDown={(e) => {
          if (props.preventDefaultMouseDown) {
            e.preventDefault();
          }
        }}
      >
        {renderTitle()}
        {renderDescrition()}
        {children}
        {renderCloseIcon()}
      </div>
    );
  };

  const renderTransition = () => {
    const { transition, destroyOnClose, mountOnEnter } = props;
    const name =
      position === 'center' ? `${prefixCls}-fade` : `${prefixCls}-popup-slide-${position}`;

    return (
      <CSSTransition
        in={visible}
        nodeRef={popupRef}
        timeout={{
          exit: duration,
        }}
        classNames={transition || name}
        mountOnEnter={!mountOnEnter}
        unmountOnExit={destroyOnClose}
        onEnter={open}
        onEntered={props.onOpened}
        onExited={() => {
          setAnimatedVisible(false);
          props.onClosed?.();
        }}
      >
        {renderPopup()}
      </CSSTransition>
    );
  };

  useEventListener('popstate', () => {
    if (props.closeOnPopstate) {
      close();
    }
  });

  useLockScroll(popupRef, props.visible);

  useEffect(() => {
    if (visible) {
      opened.current = true;
      setAnimatedVisible(true);
    }
  }, [visible]);

  useImperativeHandle(ref, () => ({
    popupRef,
  }));

  return renderToContainer(
    props.teleport,
    <PopupContext.Provider value={{ visible }}>
      {renderOverlay()}
      {renderTransition()}
    </PopupContext.Provider>,
  );
});

Popup.defaultProps = {
  duration: 300,
  overlay: true,
  lockScroll: true,
  position: 'center',
  closeIcon: 'cross',
  closeIconPosition: 'top-right',
  closeOnClickOverlay: true,
  preventDefaultMouseDown: false,
  teleport: () => document.body,
};

Popup.displayName = 'Popup';

export default Popup;
