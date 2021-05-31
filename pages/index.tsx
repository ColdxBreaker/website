import Head from "next/head";
import GithubIcon from "@/public/icons/github.svg";
import EmailIcon from "@/public/icons/email.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import ResumeIcon from "@/public/icons/resume.svg";
import Icons from "@/components/Icons/Icons";
import Project from "@/components/Project/Project";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Data = {
  name: string;
  avatar_url: string;
  description: string;
  blog: string;
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const icons = [
    {
      labelName: "Github",
      link: "https://github.com/hiimchrislim",
      image: <GithubIcon />,
    },
    {
      labelName: "Linkedin",
      link: "https://www.linkedin.com/in/hiimchrislim/",
      image: <LinkedinIcon />,
    },
    {
      labelName: "Email",
      link: "mailto:hello@hiimchrislim.co",
      image: <EmailIcon />,
    },
    { labelName: "Resume", link: "/resume.pdf", image: <ResumeIcon /> },
  ];
  return (
    <div className={"flex flex-col justify-center bg-black min-h-screen"}>
      <Head>
        <title>hiimchrislim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project
        avatar_url={data.avatar_url}
        title={data.name}
        description={data.description}
        repo={"https://github.com/2ofClubsApp"}
        docs={data.blog}
        start_date={"May 2020"}
        end_date={"Aug 2020"}
      />
      <main className={"px-5"}>
        <div className={"text-white text-center"}>
          <p>
            Hi I&apos;m Chris Lim. I&apos;m a Computer Science Student at the
            University of Toronto!
          </p>
          <div className={"flex justify-center space-x-7 pt-7"}>
            <Icons icons={icons} />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("/api/projects");
  const data: Data = await res.json();
  return {
    props: { data },
  };
};

export default Home;
