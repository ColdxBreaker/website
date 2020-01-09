import classes from "./Header.module.css";
import Icons from "./Icons/Icons";
import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems"
import Title from "./Title/Title";


export default function Header() {
    return (
        <header className={classes.Toolbar}>
            <nav>
                <Icons/>
                <NavigationItems/>
                {/*<Title/>*/}
            </nav>
        </header>

    );
};






