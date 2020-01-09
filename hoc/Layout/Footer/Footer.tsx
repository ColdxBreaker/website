import React from "react";
// @ts-ignore
import classes from "./Footer.module.css";

// Change to make it not rerender if nothing changes
export default function Footer() {
    return (
        <div className={classes.Footer}>
            <p>Created by Chris Lim</p>
            <p>Copyright © 2019 - {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
    );
}

