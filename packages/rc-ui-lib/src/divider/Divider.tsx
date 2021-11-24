import React, { useContext } from 'react';
import classnames from 'classnames';
import { DividerProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Divider: React.FC<DividerProps> = ({
  children,
  className,
  hairline,
  dashed,
  contentPosition,
  ...props
}) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('divider', prefixCls);

  return (
    <div
      role="separator"
      className={classnames(
        className,
        bem({
          dashed,
          hairline,
          [`content-${contentPosition}`]: !!children,
        }),
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Divider.defaultProps = {
  hairline: true,
  contentPosition: 'center',
};

export default Divider;
