import React, {AnchorHTMLAttributes} from 'react';
import classes from "./Icon.module.css";

const Icon = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a href={props.href} className={classes.IconCSS} target={"_blank"} rel="noopener" download>
            {props.children}
        </a>
    );
};
export default Icon;
