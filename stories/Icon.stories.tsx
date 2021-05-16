import React from "react";
import { Icon, IconProps } from "../components/Icons/Icon/Icon";
import { Icons, IconElement } from "../components/Icons/Icons";
import { Story, Meta } from "@storybook/react";
import GithubIcon from "./assets/github.svg";

export default {
  title: "Icons",
  component: Icons,
} as Meta;

const Template: Story<{ icons: IconElement[] }> = (args) => <Icons {...args} />;

// const ManyIcons = (args) => (
//   <Icons icons={}/>
// )
