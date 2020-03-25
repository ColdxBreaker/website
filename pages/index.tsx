import React from 'react';
import Icons from "../components/Icons/Icons";
import classes from "../css/Index.module.css";
import Text from "../components/Text/Text";
import Navigation from "../components/Sidebar/Navigation/Navigation";
import Contact from "../components/Contact/Contact";
import Head from "next/head";

const Index = () => {
    return (
        <div>
            <Head>
                <title>hiimchrislim</title>
                <link rel={"icon"} href={"/static/favicon.ico"}/>
            </Head>
            {/*<Navigation/>*/}
            <div className={classes.frontPage}>
                <Text/>
                <Icons/>
            </div>
            {/*<Contact/>*/}
        </div>
    );
};

export default Index;
