import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import Column from './PickerColumn';
import { Loading } from '../loading';
import { PickerProps, PickerInstance } from './PropsType';
import useRefs from '../hooks/use-refs';
import { extend, preventDefault, unitToPx } from '../utils';
import { PickerObjectColumn } from '.';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import useEventListener from '../hooks/use-event-listener';

const Picker = forwardRef<PickerInstance, PickerProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('picker', prefixCls);

  const [refs, setRefs] = useRefs();
  const [formattedColumns, setFormattedColumns] = useState([]);

  const {
    text: textKey,
    values: valuesKey,
    children: childrenKey,
  } = extend(
    {
      // compatible with valueKey prop
      text: 'text',
      values: 'values',
      children: 'children',
    },
    props.columnsFieldNames,
  );

  const wrapper = useRef<HTMLDivElement>(null);

  const itemHeight = useMemo(() => unitToPx(props.itemHeight), [props.itemHeight]);

  const dataType = useMemo(() => {
    const { columns } = props;
    const firstColumn = columns[0] || {};

    if (typeof firstColumn === 'object') {
      if (childrenKey in firstColumn) {
        return 'cascade';
      }
      if (valuesKey in firstColumn) {
        return 'object';
      }
    }
    return 'plain';
  }, [props.columns]);

  const formatCascade = () => {
    const formatted: PickerObjectColumn[] = [];

    let cursor: PickerObjectColumn = {
      [childrenKey]: props.columns,
    };

    while (cursor && cursor[childrenKey]) {
      const children = cursor[childrenKey];
      let defaultIndex = cursor.defaultIndex ?? +props.defaultIndex;

      while (children[defaultIndex] && children[defaultIndex].disabled) {
        if (defaultIndex < children.length - 1) {
          defaultIndex++;
        } else {
          defaultIndex = 0;
          break;
        }
      }

      formatted.push({
        [valuesKey]: cursor[childrenKey],
        className: cursor.className,
        defaultIndex,
      });

      cursor = children[defaultIndex];
    }
    setFormattedColumns(formatted);
  };

  const format = () => {
    const { columns } = props;

    if (dataType === 'plain') {
      setFormattedColumns([
        {
          [valuesKey]: columns,
        },
      ]);
    } else if (dataType === 'cascade') {
      formatCascade();
    } else {
      setFormattedColumns(columns);
    }
  };

  // get indexes of all columns
  const getIndexes = () => refs.map((_ref) => _ref.getIndex());

  // set options of column by index
  const setColumnValues = (index: number, options) => {
    const column = refs[index];
    if (column) {
      column.setOptions(options);
    }
  };

  const onCascadeChange = (columnIndex: number) => {
    let cursor: PickerObjectColumn = {
      [childrenKey]: props.columns,
    };
    const indexes = getIndexes();

    for (let i = 0; i <= columnIndex; i += 1) {
      cursor = cursor[childrenKey][indexes[i]];
    }

    while (cursor && cursor[childrenKey]) {
      columnIndex += 1;
      setColumnValues(columnIndex, cursor[childrenKey]);
      cursor = cursor[childrenKey][cursor.defaultIndex || 0];
    }
  };

  // get column instance by index
  const getChild = (index: number) => refs[index];

  // get column value by index
  const getColumnValue = (index: number) => {
    const column = getChild(index);
    return column?.getValue() || undefined;
  };

  // set column value by index
  const setColumnValue = (index: number, value: string) => {
    const column = getChild(index);

    if (column) {
      column.setValue(value);

      if (dataType === 'cascade') {
        onCascadeChange(index);
      }
    }
  };

  // get column option index by column index
  const getColumnIndex = (index: number) => {
    const column = getChild(index);
    return column?.getIndex() || 0;
  };

  // set column option index by column index
  const setColumnIndex = (columnIndex: number, optionIndex: number) => {
    const column = getChild(columnIndex);

    if (column) {
      column.setIndex(optionIndex);
      if (dataType === 'cascade') {
        onCascadeChange(columnIndex);
      }
    }
  };

  // get options of column by index
  const getColumnValues = (index: number) => {
    const column = getChild(index);
    return column?.getOptions();
  };

  // get values of all columns
  const getValues = () => refs.map((_ref) => _ref.getValue());

  // set values of all columns
  const setValues = (values: string[]) => {
    values.forEach((value, index) => {
      setColumnValue(index, value);
    });
  };

  // set indexes of all columns
  const setIndexes = (indexes: []) => {
    indexes.forEach((optionIndex, columnIndex) => {
      setColumnIndex(columnIndex, optionIndex);
    });
  };

  const onChange = (columnIndex: number) => {
    if (dataType === 'cascade') {
      onCascadeChange(columnIndex);
    }
    if (props.onChange) {
      if (dataType === 'plain') {
        props.onChange(getColumnValue(0), getColumnIndex(0));
      } else {
        props.onChange(getValues(), columnIndex);
      }
    }
  };

  const confirm = () => {
    if (props.onConfirm) {
      if (dataType === 'plain') {
        props.onConfirm(getColumnValue(0), getColumnIndex(0));
      } else {
        props.onConfirm(getValues(), getIndexes());
      }
    }
  };

  const cancel = () => {
    if (dataType === 'plain') {
      props.onCancel?.(getColumnValue(0), getColumnIndex(0));
    } else {
      props.onCancel?.(getValues(), getIndexes());
    }
  };

  const renderTitle = () => {
    if (props.title) {
      return <div className={classNames(bem('title'), 'rc-ellipsis')}>{props.title}</div>;
    }
    return null;
  };

  const renderCancel = () => {
    const text = props.cancelButtonText || '取消';
    return (
      <button type="button" className={classNames(bem('cancel'))} onClick={cancel}>
        {text}
      </button>
    );
  };

  const renderConfirm = () => {
    const text = props.confirmButtonText || '确认';
    return (
      <button type="button" className={classNames(bem('confirm'))} onClick={confirm}>
        {text}
      </button>
    );
  };

  const renderToolbar = () => {
    return props.showToolbar ? (
      <div className={classNames(bem('toolbar'))}>
        {props.toolbar || (
          <>
            {renderCancel()}
            {renderTitle()}
            {renderConfirm()}
          </>
        )}
      </div>
    ) : null;
  };

  const renderColumnItems = () =>
    formattedColumns.map((item, columnIndex) => (
      <Column
        key={String(columnIndex)}
        optionRender={props.optionRender}
        ref={setRefs(columnIndex)}
        textKey={textKey}
        readonly={props.readonly}
        className={item.className}
        itemHeight={itemHeight}
        defaultIndex={item.defaultIndex ?? +props.defaultIndex}
        swipeDuration={props.swipeDuration}
        visibleItemCount={props.visibleItemCount}
        initialOptions={item[valuesKey]}
        onChange={() => {
          onChange(columnIndex);
        }}
      />
    ));

  const renderColumns = () => {
    const wrapHeight = itemHeight * props.visibleItemCount;
    const frameStyle = { height: `${itemHeight}px` };
    const columnsStyle = { height: `${wrapHeight}px` };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
    };

    return (
      <div ref={wrapper} className={classNames(bem('columns'))} style={columnsStyle}>
        {renderColumnItems()}
        <div className={classNames(bem('mask'))} style={maskStyle} />
        <div className={classNames(BORDER_UNSET_TOP_BOTTOM, bem('frame'))} style={frameStyle} />
      </div>
    );
  };

  useEffect(() => {
    format();
  }, [props.columns]);

  useEventListener('touchmove', preventDefault, {
    target: wrapper.current,
    depends: [wrapper.current],
  });

  useImperativeHandle(ref, () => ({
    confirm,
    getValues,
    setValues,
    getIndexes,
    setIndexes,
    getColumnIndex,
    setColumnIndex,
    getColumnValue,
    setColumnValue,
    getColumnValues,
    setColumnValues,
  }));

  return (
    <div className={classNames(bem(), props.className)}>
      {props.toolbarPosition === 'top' ? renderToolbar() : null}
      {props.loading ? <Loading className={classNames(bem('loading'))} /> : null}
      {props.columnsTop}
      {renderColumns()}
      {props.columnsBottom}
      {props.toolbarPosition === 'bottom' ? renderToolbar() : null}
    </div>
  );
});

Picker.defaultProps = {
  itemHeight: 44,
  visibleItemCount: 5,
  swipeDuration: 1000,
  defaultIndex: 0,
  showToolbar: true,
  toolbarPosition: 'top',
};

Picker.displayName = 'Picker';

export default Picker;
