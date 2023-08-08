import React, { useContext } from 'react';
import classnames from 'classnames';
import { TypographyBaseProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const TypographyBase: React.FC<TypographyBaseProps & { renderType: string }> = ({
  type,
  size = 'md',
  level,
  center,
  ellipsis,
  className,
  children,
  strong,
  underline,
  disabled,
  renderType,
  delete: del,
  ...props
}) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('typography', prefixCls);

  const elli = ellipsis === true ? 1 : ellipsis;
  return (
    <div
      className={classnames(
        className,
        bem([
          type,
          size,
          renderType,
          {
            center,
            strong,
            underline,
            disabled,
            delete: del,
            [`l${level}`]: renderType === 'title' && level,
          },
        ]),
        {
          'rc-ellipsis': elli === 1,
          [`rc-multi-ellipsis--l${elli}`]: elli && elli > 1,
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TypographyBase;
