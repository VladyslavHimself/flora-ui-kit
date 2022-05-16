import React from "react";
import { Button } from "./Button";
import "./button.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    variant: { control: "radio", options: ["success", "danger"] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Sample",
  variant: "success",
};
