import Icon from "@/components/Icons/Icon/Icon";
import { NextPage } from "next";

interface IconElement {
  labelName: string;
  link: string;
  image: JSX.Element; // Need to change this later
}

const Icons = (props: { icons: IconElement[] }) => {
  const allIcons = props.icons.map((icon: IconElement, idx: number) => {
    return (
      <Icon
        labelName={icon.labelName}
        key={idx}
        href={icon.link}
        img={icon.image}
      />
    );
  });
  return <>{allIcons}</>;
};

export default Icons;
