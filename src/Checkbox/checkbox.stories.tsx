import React from "react";
import { Checkbox } from "./Checkbox";
import "./checkbox.scss";
import "../styles/globals.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/Checkbox",
  component: Checkbox,
  argTypes: {
    children: {
      control: "text",
      description: "Checkbox text",
      defaultValue: "Checkbox value",
    },

    id: {
      control: "text",
      description: "Checkbox index. Must be unique",
      defaultValue: "checkbox-id",
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Checkbox",
};
