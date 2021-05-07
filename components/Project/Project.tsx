interface ProjectProps {
  avatar_url: string;
  title: string;
  description: string;
  repo: string;
  docs?: string;
  demo?: string;
}

const Project = ({
  avatar_url,
  title,
  description,
  repo,
  docs,
  demo,
}: ProjectProps) => {
  return (
    <div className={"bg-white"}>
      <p>{title}</p>
      <img src={avatar_url} />
      <p>{description}</p>
      <p>{repo}</p>
      <p>{docs}</p>
      <p>{demo}</p>
    </div>
  );
};
export default Project;
