import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="wide wow-animation" lang="en">
      <Head>
        <link rel="icon" href={"/img/logo-2.png"} type="image/x-icon" />
        <meta
          name="description"
          content="At Yeokom Engineering Ltd, we aim to always design A sustainable drainage system for your project‘s drainage scheme."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
