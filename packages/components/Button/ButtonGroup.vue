<template>
  <div class="cl-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, toRef } from "vue";
import type { ButtonGroupProps } from "./types.ts";
import { BUTTON_GROUP_CTX_KEY } from "./contants.ts";

defineOptions({
  name: "ClButtonGroup",
});
const props = defineProps<ButtonGroupProps>();

provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: props.size,
    type: props.type,
    disabled: props.disabled,
  })
);
</script>
