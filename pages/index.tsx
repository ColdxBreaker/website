import Head from "next/head";
import GithubIcon from "@/public/icons/github.svg";
import EmailIcon from "@/public/icons/email.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import ResumeIcon from "@/public/icons/resume.svg";
import Icons from "@/components/Icons/Icons";

const Home = () => {
  const icons = [
    {
      name: "Github",
      link: "https://github.com/hiimchrislim",
      image: <GithubIcon />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/hiimchrislim/",
      image: <LinkedinIcon />,
    },
    {
      name: "Email",
      link: "mailto:hello@hiimchrislim.co",
      image: <EmailIcon />,
    },
    { name: "Resume", link: "/resume.pdf", image: <ResumeIcon /> },
  ];

  return (
    <div className={"bg-black flex flex-col justify-center min-h-screen"}>
      <Head>
        <title>hiimchrislim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
export default Home;
