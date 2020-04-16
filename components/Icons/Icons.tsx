import React from 'react';
import EmailIcon from "../../public/assets/email.svg";
import LinkedInIcon from "../../public/assets/linkedin.svg";
import GithubIcon from "../../public/assets/github.svg";
import Icon from "./Icon/Icon";
import classes from "./Icons.module.css";
import ResumeIcon from "../../public/assets/resume.svg";

const Icons = () => {
    const icons = [<GithubIcon/>, <LinkedInIcon/>, <EmailIcon/>, <ResumeIcon/>];
    const iconLinks = ["https://github.com/hiimchrislim", "https://www.linkedin.com/in/hiimchrislim", "mailto:hello@hiimchrislim.co", "resume.pdf"];
    const allIcons = icons.map((icon, index) => {
        return (
            <Icon key={index} href={iconLinks[index]}>
                {icon}
            </Icon>
        );
    });
    return (
        <div className={classes.Icons}>
            {allIcons}
        </div>
    )
};

export default Icons;
