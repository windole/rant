import React, { CSSProperties, useContext, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import { CircleProps, CircleStartPosition } from './PropsType';
import { isObject, getSizeStyle } from '../utils';
import { cancelRaf, raf } from '../utils/raf';
import useMergedState from '../hooks/use-merged-state';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

let uid = 0;

function format(rate: string | number) {
  return Math.min(Math.max(+rate, 0), 100);
}

function getPath(clockwise: boolean, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

const ROTATE_ANGLE_MAP: Record<CircleStartPosition, number> = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

const Circle: React.FC<CircleProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('circle', prefixCls);

  const id = `rc-circle-${uid++}`;

  const [currentRate, setCurrentRate] = useState(() => props.defaultRate || 0);

  const [rate] = useMergedState({
    defaultValue: props.defaultRate,
    value: props.rate,
  });

  const viewBoxSize = useMemo(() => +props.strokeWidth + 1000, [props.strokeWidth]);

  const path = useMemo(() => getPath(props.clockwise, viewBoxSize), [props.clockwise, viewBoxSize]);

  const svgStyle = useMemo(() => {
    const angleValue = ROTATE_ANGLE_MAP[props.startPosition];
    if (angleValue) {
      return {
        transform: `rotate(${angleValue}deg)`,
      };
    }
    return undefined;
  }, [props.startPosition]);

  useEffect(() => {
    let rafId: number | undefined;
    const startTime = Date.now();
    const startRate = currentRate;
    const endRate = format(rate);
    const duration = Math.abs(((startRate - endRate) * 1000) / +props.speed);

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const tempRate = progress * (endRate - startRate) + startRate;
      const crate = format(parseFloat(tempRate.toFixed(1)));

      setCurrentRate(crate);
      props.onChange?.(crate);

      if (endRate > currentRate ? tempRate < endRate : tempRate > endRate) {
        rafId = raf(animate);
      }
    };

    if (props.speed) {
      if (rafId) {
        cancelRaf(rafId);
      }
      rafId = raf(animate);
    } else {
      setCurrentRate(endRate);
      props.onChange?.(endRate);
    }

    return () => {
      cancelRaf(rafId);
    };
  }, [rate]);

  const renderHover = () => {
    const PERIMETER = 3140;
    const { strokeWidth, strokeLinecap } = props;
    const offset = (PERIMETER * currentRate) / 100;
    const color = isObject(props.color) ? `url(#${id})` : props.color;

    const style: CSSProperties = {
      stroke: color,
      strokeWidth: `${+strokeWidth + 1}px`,
      strokeLinecap,
      strokeDasharray: `${offset}px ${PERIMETER}px`,
    };

    return <path d={path} style={style} className={classnames(bem('hover'))} stroke={color} />;
  };

  const renderLayer = () => {
    const style = {
      fill: props.fill,
      stroke: props.layerColor,
      strokeWidth: `${props.strokeWidth}px`,
    };

    return <path className={classnames(bem('layer'))} style={style} d={path} />;
  };

  const renderGradient = () => {
    const { color } = props;

    if (!isObject(color)) {
      return null;
    }

    const Stops = Object.keys(color)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      // eslint-disable-next-line react/no-array-index-key
      .map((key, index) => <stop key={index} offset={key} stopColor={color[key]} />);

    return (
      <defs>
        <linearGradient className="linearGradient" id={id} x1="100%" y1="0%" x2="0%" y2="0%">
          {Stops}
        </linearGradient>
      </defs>
    );
  };

  const renderText = () => {
    if (props.text) {
      return <div className={classnames(bem('text'))}>{props.text}</div>;
    }
    return props.children;
  };

  return (
    <div
      className={classnames(bem(), props.className)}
      style={{ ...props.style, ...getSizeStyle(props.size) }}
    >
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} style={svgStyle}>
        {renderGradient()}
        {renderLayer()}
        {renderHover()}
      </svg>
      {renderText()}
    </div>
  );
};

Circle.defaultProps = {
  clockwise: true,
  speed: 100,
  fill: 'none',
  strokeWidth: 40,
  startPosition: 'top',
};

export default Circle;
