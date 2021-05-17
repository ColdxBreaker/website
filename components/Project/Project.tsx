import Github from "@/public/icons/github.svg";
import Docs from "@/public/icons/project/document.svg";
import Demo from "@/public/icons/project/play-button.svg";
import Calendar from "@/public/icons/project/calendar.svg";

interface ProjectProps {
  avatar_url: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  repo: string;
  docs?: string;
  demo?: string;
}

const Project = ({
  avatar_url,
  title,
  description,
  start_date,
  end_date,
  repo,
  docs,
  demo,
}: ProjectProps) => {
  return (
    <div
      className={
        "relative py-6 px-6 rounded-3xl w-64 my-4 inline-block bg-white"
      }
    >
      <div className={"absolute left-4 -top-6 w-14"}>
        <img
          className={"border-4 border-green-500 rounded-full"}
          src={avatar_url}
        />
      </div>
      <div>
        <p className={"text-xl font-semibold my-2"}>{title}</p>
        <p>{description}</p>
        <div className={"flex space-x-2 pb-1"}>
          <Calendar />
          <p>
            {start_date}-{end_date}
          </p>
        </div>
        <div className={"border-t-2 border-black"}></div>
        <div className={"flex justify-between"}>
          <div>
            <p>Team Members</p>
            Members
          </div>
          <div>
            <p>Check it out</p>
            <div className={"flex flex-row"}>
              <a href={repo}>
                <Github />
              </a>
              <a href={docs}>
                <Docs />
              </a>
              <a href={demo}>
                <Demo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
