import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";
import * as React from "react";

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
                    {/*https://fonts.googleapis.com/css?family=Roboto&display=swap*/}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default CustomDocument;
