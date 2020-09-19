import React from 'react';
import Icons from "../components/Icons/Icons";
import classes from "../css/Index.module.css";
import Text from "../components/Text/Text";
import Head from "next/head";
import HeroDisplay from "../components/HeroDisplay/HeroDisplay";

const Index = () => {
    return (
    <div>
            <Head>
                <title>hiimchrislim</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <HeroDisplay socialIcons={<Icons/>}
                         greeting={"Hi I'm Chris Lim"}
                         subtitle={"I'm a "}
                         desc={"I love contributing to open source and teaching others!"}
                         imageUrl={"https://avatars1.githubusercontent.com/u/24628243?s=400&u=0edf079732c29b3c8cdd0358a39210d57d301002&v=4"}/>
        </div>
    );
};

export default Index;
