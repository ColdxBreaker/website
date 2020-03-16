import React from 'react';
import Link from "./Link/Link";
import classes from "./Links.module.css";

const Links = () => {
    const links = ["Home", "Skills", "Experience", "Projects", "Resume", "Contact"];
    const allLinks = links.map((link, index) => {
        return (
            <ol>
                <Link key={index} href={link} >
                    {links[index]}
                </Link>
            </ol>
        );
    });
    return (
        <div className={classes.Links}>
            {allLinks}
        </div>
    );
};

export default Links;
