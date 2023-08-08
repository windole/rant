import { ReactNode } from 'react';
import { CellProps } from '../cell/PropsType';
import { BaseTypeProps } from '../utils';

export interface CollapseProps extends BaseTypeProps {
  /** 是否开启手风琴模式	 */
  accordion?: boolean;
  /** 默认打开的面板name */
  initValue?: string | number | Array<number | string>;
  /** 是否显示外边框	 */
  border?: boolean;
  /** 当前展开面板的 name	 */
  value?: number | string | Array<number | string>;
  /** 子组件	 */
  children?: ReactNode;
  /** 切换面板时触发	*/
  onChange?: (activeNames: number | string | Array<number | string>) => void;
}

export interface CollapseItemProps extends CellProps {
  /** 唯一标识符，默认为索引值	 */
  name?: number | string;
  /** 是否禁用面板	 */
  disabled?: boolean;
  /** 是否为只读状态，只读状态下无法操作面板	 */
  readonly?: boolean;
  /** @private */
  index?: number;
  /** 子组件	 */
  children?: ReactNode;
  // onClick: () => void;
}

export type CollapseItemInstance = {
  toggle: (expand: boolean) => void;
};
