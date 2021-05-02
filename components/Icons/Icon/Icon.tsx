interface IconProps {
  href: string;
  img: JSX.Element;
}

const Icon = ({ href, img }: IconProps) => {
  return (
    <a
      className={"fill-current text-white-300 hover:text-green-500 "}
      href={href}
      target={"_blank"}
      rel="noopener noreferrer"
      download
    >
      {img}
    </a>
  );
};
export default Icon;
