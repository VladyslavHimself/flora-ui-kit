import React from "react";
import { CloseButton } from "./CloseButton";
import "./closeButton.scss";

import "../styles/globals.scss";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Ui/CloseButton",
  component: CloseButton,
  argTypes: {},
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
