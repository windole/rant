/* eslint-disable react/default-props-match-prop-types */
import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';

import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

import { lockClick } from './lock-click';
import { isDef } from '../utils';
import { ToastPrivateProps, ToastProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

// eslint-disable-next-line react/require-default-props
const Toast: React.FC<ToastProps & ToastPrivateProps & { visible?: boolean }> = (props) => {
  let clickable = false;

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('toast', prefixCls);

  const toggleClickable = () => {
    const newValue = props.visible && props.forbidClick;
    if (clickable !== newValue) {
      clickable = newValue;
      lockClick(clickable);
    }
    if (!props.visible) {
      lockClick(false);
    }
  };

  const handleClick = () => {
    if (props.closeOnClick) {
      props.onClose();
    }
  };

  useEffect(() => {
    toggleClickable();
  }, [props.visible, props.forbidClick]);

  const renderIcon = () => {
    const { icon, type, iconPrefix, iconSize, loadingType } = props;
    const hasIcon = icon || type === 'success' || type === 'fail';
    if (hasIcon) {
      return typeof icon === 'string' ? (
        <Icon
          name={icon || (type === 'fail' ? 'cross' : type)}
          size={iconSize}
          className={classnames(bem('icon'))}
          classPrefix={iconPrefix}
        />
      ) : (
        icon
      );
    }

    if (type === 'loading') {
      return <Loading className={classnames(bem('loading'))} type={loadingType} />;
    }

    return null;
  };

  const renderMessage = () => {
    const { message } = props;
    if (isDef(message) && message !== '') {
      return <div className={classnames(bem('info'))}>{message}</div>;
    }
    return null;
  };

  return (
    <Popup
      className={classnames([
        bem([props.position, { [props.type]: !props.icon }]),
        props.className,
      ])}
      visible={props.visible}
      overlay={props.overlay}
      transition={props.transition}
      overlayClass={props.overlayClass}
      overlayStyle={props.overlayStyle}
      closeOnClickOverlay={props.closeOnClickOverlay}
      lockScroll={false}
      onClick={handleClick}
      onClose={props.onClose}
      onClosed={props.onClosed}
      onOpened={props.onOpened}
      teleport={props.teleport}
    >
      {renderIcon()}
      {renderMessage()}
    </Popup>
  );
};

Toast.defaultProps = {
  type: 'info',
  duration: 2000,
  position: 'middle',
  transition: 'rc-fade',
  loadingType: 'circular',
  overlay: false,
};

export default Toast;
