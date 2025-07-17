<template>
  <i
    class="cl-icon"
    :class="{ [`cl-icon--${props.type}`]: props.type }"
    :style="customStyle"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filterProps" />
  </i>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { omit } from "lodash-es";
import type { IconProps } from "./type.ts";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineOptions({
  name: "ClIcon",
  inheritAttrs: false, // 不继承父组件的属性，关闭透传
});

const props = defineProps<IconProps>();

const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyle = computed(() => ({ color: props.color ?? void 0 }));
</script>

<style scoped>
.cl-icon {
  --cl-icon-color: inherit; /* 继承父组件的颜色 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: var(--cl-icon-color);
  font-size: inherit;
}

.cl-icon--primary {
  --cl-icon-color: var(--cl-color-primary);
}

.cl-icon--info {
  --cl-icon-color: var(--cl-color-info);
}

.cl-icon--success {
  --cl-icon-color: var(--cl-color-success);
}

.cl-icon--warning {
  --cl-icon-color: var(--cl-color-warning);
}

.cl-icon--danger {
  --cl-icon-color: var(--cl-color-danger);
}
</style>
