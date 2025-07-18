import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "info" | "warning" | "danger";
export type NativeType = "submit" | "button" | "reset";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

// 按钮组
export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

// emit事件类型
export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

// button组件暴露的实例类型
export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}
