<template>
  <component
    ref="_ref"
    class="er-button"
    :is="tag"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="
      (e) => (useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e))
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <cl-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        ></cl-icon>
      </slot>
    </template>
    <cl-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    />
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { ClIcon } from "../Icon";
import { throttle } from "lodash-es";
import { ref, computed, inject } from "vue";
import { BUTTON_GROUP_CTX_KEY } from "./contants.ts";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";

defineOptions({
  name: "ClButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true, // 是否使用节流
  throttleDuration: 500, // 节流时间
});

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>();
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));
const size = computed(() => ctx?.size ?? props.size ?? "");

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  { trailing: true }
);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<style scoped>
@import "./style.css";
</style>
