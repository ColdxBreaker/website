import React from "react";
import { Icon, IconProps } from "../components/Icons/Icon/Icon";
import { Story } from "@storybook/react";
import GithubIcon from "./assets/github.svg";

export default {
  title: "Icon",
  component: Icon,
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const aa = Template.bind({});
aa.args = {
  labelName: "Github",
  href: "https://github.com/hiimchrislim",
  // img: <GithubIcon />,
};
