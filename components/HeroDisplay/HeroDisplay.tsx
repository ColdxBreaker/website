import React, {useEffect} from "react";
import classes from "./HeroDisplay.module.css";
import Icons from "../Icons/Icons";
import Typed from 'typed.js';

type HeroDisplayProps = {
    greeting: string
    subtitle: string
    desc: string
    imageUrl: string
    socialIcons: any
};

const HeroDisplay = (props: HeroDisplayProps) => {
    useEffect(() => {
        const options = {
            strings: ["Software Developer", "Video Games Enthusiast"],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true
        };
        const typed = new Typed("#test", options)
        return () => {
            typed.destroy();
        };
    }, ["test"]);
    return (
        <div className={`container d-flex py-4 justify-content-center`}>
            <div className={classes.test}>
                <h1 className={classes.greeting}>{props.greeting}</h1>
                <h1 className={classes.subtitle}>{props.subtitle}
                    <span className={classes.subtitle}>
                        <section className={classes.subtitle} id={"test"}></section>
                    </span>
                </h1>
                <div className={classes.description}>{props.desc}</div>
                {props.socialIcons}
            </div>
            <div className={"pl-5"}>
                <img className={classes.image} src={props.imageUrl}/>
            </div>
        </div>
    );
};

export default HeroDisplay;

