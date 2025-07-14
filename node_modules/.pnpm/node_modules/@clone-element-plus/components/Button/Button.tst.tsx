import { describe, it, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button 组件", () => {
  it("应该正确渲染", () => {
    const wrapper = mount(Button);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.element.tagName).toBe("BUTTON");
  });

  it("应该显示正确的文本内容", () => {
    const wrapper = mount(Button);
    expect(wrapper.text()).toBe("这是按钮");
  });

  it("应该有正确的样式", () => {
    const wrapper = mount(Button);
    const button = wrapper.find("button");
    expect(button.attributes("style")).toContain("background-color: blur");
  });

  it("应该有正确的组件名称", () => {
    const wrapper = mount(Button);
    expect(wrapper.vm.$options.name).toBe("ClButton");
  });

  it("应该可以被点击", async () => {
    const wrapper = mount(Button);
    const button = wrapper.find("button");
    
    await button.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("应该支持自定义属性", () => {
    const wrapper = mount(Button, {
      attrs: {
        id: "test-button",
        "data-testid": "custom-button"
      }
    });
    
    const button = wrapper.find("button");
    expect(button.attributes("id")).toBe("test-button");
    expect(button.attributes("data-testid")).toBe("custom-button");
  });

  it("应该支持禁用状态", () => {
    const wrapper = mount(Button, {
      attrs: {
        disabled: true
      }
    });
    
    const button = wrapper.find("button");
    expect(button.attributes("disabled")).toBeDefined();
  });
});

// 快照测试
describe("Button 快照测试", () => {
  it("应该匹配快照", () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
