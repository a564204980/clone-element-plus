import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  border?: boolean;
  fixedWidth?: boolean; // 图标宽度固定
  flip?: "horizontal" | "vertical" | "both"; // 图标翻转
  icon: object | Array<string> | string | IconDefinition; // 图标名称
  mask?: object | Array<string> | string; // 图标遮罩
  listItem?: boolean; // 列表项图标
  pull?: "right" | "left"; // 图标对齐
  pulse?: boolean; // 图标旋转
  rotation?: 90 | 180 | 270 | "90" | "180" | "270"; // 图标旋转角度
  swapOpacity?: boolean; // 图标交换透明度
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  spin?: boolean; // 图标旋转
  transform?: object | string; // 图标旋转角度
  symbol?: boolean | string; // 图标符号
  title?: string;
  inverse?: boolean; // 图标反向
  bounce?: boolean;
  shake?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  type?: "primary" | "success" | "warning" | "danger" | "info";
  color?: string;
}
