import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";
import * as React from "react";

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang={"EN"}>
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Personal Website"/>
                    <meta name="author" content="Chris Lim"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>hiimchrislim.co</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossOrigin="anonymous"
                    />
                    <link rel="icon" type="image/x-icon" href={"../public/favicon.ico"}/>
                </head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default CustomDocument;
