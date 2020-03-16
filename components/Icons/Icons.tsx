import React from 'react';
import EmailIcon from "../../public/email.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import GithubIcon from "../../public/github.svg";
import Icon from "./Icon/Icon";
import classes from "./Icons.module.css";
import PDF from "../../public/resume.pdf";
import ResumeIcon from "../../public/resume.svg";

const Icons = () => {
    const icons = [<GithubIcon/>, <LinkedInIcon/>, <EmailIcon/>, <ResumeIcon/>];
    const iconLinks = ["https://github.com/hiimchrislim", "https://www.linkedin.com/in/hiimchrislim", "mailto:hello@hiimchrislim.co", PDF];
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
