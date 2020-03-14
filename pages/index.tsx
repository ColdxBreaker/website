import React from 'react';
import Icons from "../components/Icons/Icons";
import classes from "../css/Index.module.css";
import Text from "../components/Text/Text";

const Index = () => {
    return (

        <div className={classes.frontPage}>
            <Text/>
            <Icons/>
        </div>
    );
};
<style jsx global>{`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
`}
</style>


export default Index;
