import React, { useContext, useMemo } from 'react';
import classnames from 'classnames';
import { StepsItemProps } from './PropsType';
import { BORDER } from '../utils/constant';
import Icon from '../icon';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const StepsItem: React.FC<StepsItemProps> = ({ children, ...props }) => {
  const { index, parent: parentProps } = props;
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('step', prefixCls);

  if (!parentProps) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[rc-ui-lib] <Step> must be a child component of <Steps>.');
    }
  }

  const getStatus = () => {
    const active = +parentProps.active;
    if (index < active) {
      return 'finish';
    }
    return index === active ? 'process' : 'waiting';
  };

  const isActive = () => getStatus() === 'process';

  const lineStyle = useMemo(
    () => ({
      background: getStatus() === 'finish' ? parentProps.activeColor : parentProps.inactiveColor,
    }),
    [index, parentProps.active, parentProps.activeColor, parentProps.inactiveColor],
  );

  const titleStyle = useMemo(() => {
    if (isActive()) {
      return { color: parentProps.activeColor };
    }
    if (getStatus() === 'waiting') {
      return { color: parentProps.inactiveColor };
    }
    return {};
  }, [index, parentProps.active, parentProps.activeColor, parentProps.inactiveColor]);

  const onClickStep = () => {
    if (parentProps.onClickStep) parentProps.onClickStep(index);
  };

  const renderCircle = () => {
    const { iconPrefix, finishIcon, activeIcon, activeColor, inactiveIcon } = parentProps;

    if (isActive()) {
      if (React.isValidElement(parentProps.activeIcon)) {
        return parentProps.activeIcon;
      }

      return (
        <Icon
          className={classnames(bem('icon', 'active'))}
          name={activeIcon as string}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      );
    }

    if (getStatus() === 'finish' && (finishIcon || React.isValidElement(parentProps.finishIcon))) {
      if (React.isValidElement(parentProps.finishIcon)) {
        return parentProps.finishIcon;
      }

      return (
        <Icon
          className={classnames(bem('icon', 'finish'))}
          name={finishIcon as string}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      );
    }

    if (React.isValidElement(parentProps.inactiveIcon)) {
      return parentProps.inactiveIcon;
    }

    if (inactiveIcon) {
      return (
        <Icon
          className={classnames(bem('icon'))}
          name={inactiveIcon as string}
          classPrefix={iconPrefix}
        />
      );
    }

    return <i className={classnames(bem('circle'))} style={lineStyle} />;
  };

  const status = getStatus();

  return (
    <div
      style={props.style}
      className={classnames(
        props.className,
        BORDER,
        bem([parentProps.direction, { [status]: status }]),
      )}
    >
      <div
        className={classnames(bem('title', { active: isActive() }))}
        style={titleStyle}
        onClick={onClickStep}
      >
        {children}
      </div>
      <div className={classnames(bem('circle-container'))} onClick={onClickStep}>
        {renderCircle()}
      </div>
      <div className={classnames(bem('line'))} style={lineStyle} />
    </div>
  );
};

export default StepsItem;
