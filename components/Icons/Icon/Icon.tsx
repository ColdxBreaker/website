export interface IconProps {
  labelName: string;
  href: string;
  img: JSX.Element;
}

export const Icon = ({ labelName, href, img }: IconProps) => {
  return (
    <a
      className={"fill-current text-white-300 hover:text-green-500 "}
      href={href}
      target={"_blank"}
      rel="noopener noreferrer"
      download
      aria-label={labelName}
    >
      {img}
    </a>
  );
};
