import React, { CSSProperties, useContext } from 'react';
import classnames from 'classnames';
import { BadgeProps } from './PropsType';
import { isDef, addUnit } from '../utils';
import { isNumeric } from '../utils/validate/number';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Badge: React.FC<BadgeProps> = (props) => {
  const { content, max, dot, showZero, tag } = props;

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('badge', prefixCls);

  const hasContent = () => {
    // if (props.content) {
    //   return true;
    // }
    return isDef(content) && content !== '' && (showZero || +content !== 0);
  };

  const renderContent = () => {
    if (!dot && hasContent()) {
      if (isDef(max) && isNumeric(content?.toString()) && +content > max) {
        return `${max}+`;
      }

      return content;
    }
    return null;
  };

  const renderBadge = () => {
    if (hasContent() || props.dot) {
      let style: CSSProperties = {
        background: props.color,
      };

      if (props.offset) {
        const [x, y] = props.offset;

        if (props.children) {
          style.top = addUnit(y);
          if (typeof x === 'number') {
            style.right = addUnit(-x);
          } else {
            style.right = x.startsWith('-') ? x.replace('-', '') : `-${x}`;
          }
        } else {
          style.marginTop = addUnit(y);
          style.marginLeft = addUnit(x);
        }
      }

      if (!props.children) {
        style = { ...props.style, ...style };
      }
      return (
        <div
          className={classnames(
            {
              [props.className]: props.className && !props.children,
            },
            bem({ dot: props.dot, fixed: !!props.children }),
          )}
          style={style}
        >
          {renderContent()}
        </div>
      );
    }
    return null;
  };

  if (props.children) {
    return React.createElement(
      tag,
      {
        className: classnames(bem('wrapper'), props.className),
        onClick: props.onClick,
        onTouchStart: props.onTouchStart,
        style: props.style,
      },
      props.children,
      renderBadge(),
    );
  }

  return renderBadge();
};

Badge.defaultProps = {
  tag: 'div',
  showZero: true,
};

export default Badge;
