import React from 'react';
// @ts-ignore
import classes from "./About.module.css"

// @ts-ignore
const aboutMe = (props) => {
    return (
        <div className={classes.About}>
            <p>Hi there! I'm Chris and I'm a 2nd year student at the University Of Toronto
                (Mississauga Campus).
                I love to learn new things and create projects that can be used by others.
                Want to work on a project together? Head over to the contact page and we'll be in touch! :)</p>
        </div>
    )
}
export default aboutMe;
