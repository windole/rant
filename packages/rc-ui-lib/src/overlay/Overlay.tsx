import React, { CSSProperties, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import { useLockScroll } from '../hooks/use-lock-scroll';
import { OverlayProps } from './PropsType';
import { isDef } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Overlay: React.FC<OverlayProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('overlay', prefixCls);
  const nodeRef = useRef(null);

  useLockScroll(nodeRef, props.visible && props.lockScroll);

  const { visible, duration, customStyle, children } = props;

  const renderOverlay = () => {
    const style: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      ...props.style,
      ...customStyle,
    };

    if (isDef(duration)) {
      style.animationDuration = `${duration}ms`;
    }

    return (
      <div
        ref={nodeRef}
        style={style}
        onClick={props.onClick}
        className={classnames(bem(), props.className)}
      >
        {children}
      </div>
    );
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={visible}
      timeout={duration}
      classNames="rc-fade"
    >
      {renderOverlay()}
    </CSSTransition>
  );
};

Overlay.defaultProps = {
  lockScroll: true,
  duration: 300,
};

export default Overlay;
