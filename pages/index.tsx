import React from 'react';
import Icons from "../components/Icons/Icons";
import classes from "../css/Index.module.css";
import Text from "../components/Text/Text";
import Navigation from "../components/Sidebar/Navigation/Navigation";

const Index = () => {
    return (
        <div>
            {/*<Navigation/>*/}
            <div className={classes.frontPage}>
                <Text/>
                <Icons/>
            </div>
        </div>
    );
};

export default Index;
