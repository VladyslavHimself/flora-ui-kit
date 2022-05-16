import React from "react";
import { Button } from "./Button";
import "./button.scss";

import "../styles/globals.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
      description: "Button text",
    },
    variant: {
      control: {
        type: "radio",

        options: ["primary", "secondary", "ghost"],
      },
      description: "Button variants",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  children: "Button",
};
