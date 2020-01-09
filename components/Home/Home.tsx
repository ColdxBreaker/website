import React from 'react';
import About from "./About/About";
import Title from "./Title/Title";
// import Email from "../../public/email.svg";

import classes from './Home.module.css';
import Layout from "../../hoc/Layout/Layout";


export default function Home() {
    return (
        //Insert image of me after
        <div className={classes.HomeCSS}>
            <Title/>
            <About/>
        </div>
    );
}
