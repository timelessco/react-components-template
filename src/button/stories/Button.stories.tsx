import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "../../index";

import "./button.css";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStoryObj<typeof Button>;

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Primary: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "large",
  },
};
