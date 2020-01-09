import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Aux from "../Aux";

export default function Layout(props: { children: React.ReactNode; }) {
    return (
        <Aux>
            <Header/>
            {props.children}
            <Footer/>
        </Aux>
    )
};



