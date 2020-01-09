import React from "react";
// @ts-ignore
import classes from "./Project.module.css";

// @ts-ignore
const Project = (props) => {
    // TODO: Rendering clickable projects then it'll specifically go to details of the project
    return (
        <div onClick={() => console.log("clicked!")} className={classes.Project}>
            <p className={classes.title}>{props.name}</p>
            <p className={classes.date}>{props.date}</p>
            <p>{props.description}</p>
            {props.technologiesUsed.map((technology: String) => {
                return <p>{technology}</p>
            })}
        </div>
    )
}

export default Project;

