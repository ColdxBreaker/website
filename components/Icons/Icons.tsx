import { Icon } from "@/components/Icons/Icon/Icon";

export interface IconElement {
  labelName: string;
  link: string;
  image: JSX.Element; // Need to change this later
}

export const Icons = (props: { icons: IconElement[] }) => {
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
