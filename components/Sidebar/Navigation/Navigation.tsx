import React from 'react'
import classes from "./Navigation.module.css";
import Links from './Links/Links';

const Navigation = () => {
    return (
        <div className={classes.Sidebar}>
            <Links/>
        </div>

    )
};

export default Navigation
