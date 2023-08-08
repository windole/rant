import { PickerInstance, PickerProps } from '../picker/PropsType';

export type DatetimePickerColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';

export type DatetimePickerType =
  | 'date'
  | 'time'
  | 'datetime'
  | 'datehour'
  | 'month-day'
  | 'year-month';

export interface SharedProps extends Omit<PickerProps, 'onConfirm' | 'onChange' | 'columns'> {
  value?: string | Date;
  /** 选项过滤函数	 */
  filter?: (type: string, values: string[]) => string[];
  /**
   * 自定义列排序数组,
   * 子项可选值为: year、month、day、hour、minute
   */
  columnsOrder?: string[];
  /** 选项格式化函数	*/
  formatter?: (type: string, value: string) => string;
  /** 点击完成按钮时触发的事件	 */
  onConfirm?: (value: Date) => void;
  /** 当值变化时触发的事件	 */
  onChange?: (value: Date) => void;
  onCancel?: () => void;
}

export interface DatePickerProps extends SharedProps {
  /** 时间类型 */
  type?: DatetimePickerType;
  /** 可选的最小时间，精确到分钟	 */
  minDate?: Date;
  /** 可选的最大时间，精确到分钟	 */
  maxDate?: Date;
}

export interface TimePickerProps extends SharedProps {
  /** 可选的最小小时	 */
  minHour?: number | string;
  /** 可选的最大小时	 */
  maxHour?: number | string;
  /** 可选的最小分钟	 */
  minMinute?: number | string;
  /** 可选的最大分钟	 */
  maxMinute?: number | string;
}

export type DateTimePickerProps = DatePickerProps & TimePickerProps;

export type DateTimePickerInstance = {
  getPicker: () => PickerInstance;
};
