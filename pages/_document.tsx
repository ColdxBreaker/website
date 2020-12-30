import Document, {Head, Html, Main, NextScript} from 'next/document'
import * as React from "react";

class CustomDocument extends Document {
    render() {
        return (
            <Html lang={"en"}>
                <head>
                    <title>hiimchrislim.co</title>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Personal Website"/>
                    <meta name="author" content="Chris Lim"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                <Head>
                    <link rel="icon" type="image/x-icon" href={"../public/favicon.ico"}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    };
}

export default CustomDocument;
