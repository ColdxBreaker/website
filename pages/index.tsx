import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import GithubIcon from "@/public/icons/github.svg";
import EmailIcon from "@/public/icons/email.svg";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import ResumeIcon from "@/public/icons/resume.svg";

export default function Home() {
  const icons = ["github", "linkedin", "email", "resume"];
  const allIcons = icons.map((icon, idx) => {
    return (
      <a
        key={idx}
        href={`/${icon}`}
        target={"_blank"}
        rel={"noopener"}
        download
        className={"fill-current text-white"}
      >
        {/*<svg src={`/icons/${icon}.svg`} />*/}
      </a>
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>hiimchrislim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={"text-white "}>
          Hi I'm Chris Lim. I'm a Computer Science Student at the University of
          Toronto!
          <div className={"flex space-x-4 justify-items-center"}>
            {allIcons}
          </div>
        </div>
      </main>
    </div>
  );
}
