/* eslint-disable no-console */
import React, { useContext, useMemo } from 'react';
import classnames from 'classnames';
import { TabbarItemProps } from './PropsType';
import TabbarContext from './TabbarContext';
import { Icon } from '../icon';
import { Badge } from '../badge';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const TabbarItem: React.FC<TabbarItemProps> = (props) => {
  const { setActive, index } = props;
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('tabbar-item', prefixCls);
  const { parent } = useContext(TabbarContext);
  const { activeColor, inactiveColor } = parent;
  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[rc-ui-lib] <TabbarItem> must be a child component of <Tabbar>.');
    }
  }

  const active = useMemo(() => {
    return (props.name || index) === parent.value;
  }, [props.name, index, parent.value]);

  const onClick = (event: React.MouseEvent) => {
    setActive(props.name ?? index);
    props.onClick?.(event);
  };

  const renderIcon = () => {
    if (typeof props.icon === 'string') {
      return <Icon name={props.icon} classPrefix={props.iconPrefix} />;
    }
    if (typeof props.icon === 'function') {
      return props.icon(active);
    }
    return null;
  };

  const color = active ? activeColor : inactiveColor;

  return (
    <div
      className={classnames(props.className, bem({ active }))}
      style={{ ...props.style, color }}
      onClick={onClick}
    >
      <Badge {...props.badge} className={classnames(bem('icon'))}>
        {renderIcon()}
      </Badge>
      <div className={classnames(bem('text'))}>
        {typeof props.children === 'function' ? props.children(active) : props.children}
      </div>
    </div>
  );
};

export default TabbarItem;
