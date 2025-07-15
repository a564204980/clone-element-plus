import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import type { ButtonSize } from "./types";

import Button from "./Button.vue";

// 创建测试套件，将相关的测试用例分组在一起，形成一个逻辑单元
describe("Button 组件", () => {
  it("应该正确渲染", () => {
    const wrapper = mount(Button);
    // expect 创建断言 toBe 匹配器
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.element.tagName).toBe("BUTTON");
  });

  it("应该有正确的按钮类型", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])("应该有正确的 %s 类型", (prop, className) => {
    const wrapper = mount(Button, {
      props: { [prop]: true },
      global: {
        stubs: ["ErIcon"],
      },
    });
    expect(wrapper.classes()).toContain(className);
  });

  it("应该有正确的按钮大小", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as ButtonSize },
      });
      expect(wrapper.classes()).toContain(`er-button--${size}`);
    });
  });
});
