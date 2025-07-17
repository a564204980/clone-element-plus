import { fn } from "storybook/test";
import { ClButton } from "clone-element-plus";
import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3-vite";

type Story = StoryObj<typeof ClButton> & { argTypes: ArgTypes };

const meta: Meta<typeof ClButton> = {
  title: "Example/Button",
  component: ClButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
  <div style="margin:5px">
    ${val}
  </div>
`;

// Default是这个Story的名称，会在 Storybook UI 中显示
export const Default: Story = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  // Story 初始加载时的参数
  args: {
    type: "primary",
    content: "Button",
  },
  render: (args) => ({
    components: { ClButton },
    setup() {
      return { args };
    },
    template: container(
      `<cl-button v-bind="args">{{args.content}}</cl-button>`
    ),
  }),
};

export default meta;
