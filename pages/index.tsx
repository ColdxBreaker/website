import Head from "next/head";
import styles from "../styles/Home.module.css";
import GithubIcon from "@/public/icons/github.svg";
import EmailIcon from "@/public/icons/email.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import ResumeIcon from "@/public/icons/resume.svg";
import Icons from "@/components/Icons/Icons";

const Home = () => {
  const icons = [
    { link: "https://github.com/hiimchrislim", image: <GithubIcon /> },
    {
      link: "https://www.linkedin.com/in/hiimchrislim/",
      image: <LinkedinIcon />,
    },
    { link: "mailto:hello@hiimchrislim.co", image: <EmailIcon /> },
    { link: "/resume.pdf", image: <ResumeIcon /> },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>hiimchrislim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={"text-white"}>
          Hi I'm Chris Lim. I'm a Computer Science Student at the University of
          Toronto!
          <div className={"flex justify-center space-x-7 pt-3"}>
            <Icons icons={icons} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
