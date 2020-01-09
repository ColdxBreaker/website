import EmailIcon from "../../../../public/email.svg";
import LinkedinIcon from "../../../../public/linkedin.svg";
import GithubIcon from "../../../../public/github.svg";
import classes from './Icons.module.css';
import Icon from "./Icon/Icon";
import React from "react";


const Icons = () => {
    const icons = [<GithubIcon/>, <LinkedinIcon/>, <EmailIcon/>];
    const iconLinks = ["https://github.com/ColdxBreaker", "https://www.linkedin.com/in/hiimchrislim/", "mailto:hello@hiimchrislim.co"];
    const allIcons = icons.map((icon, index) => {
        return (
            <Icon href={iconLinks[index]}>
                {icon}
            </Icon>
        );
    });

    return (
        <div className={classes.IconsCSS}>
            {allIcons}
        </div>
    );
};

export default Icons;
