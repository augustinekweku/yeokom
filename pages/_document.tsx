import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="wide wow-animation" lang="en">
      <Head>
        <link rel="icon" href={"/img/logo-2.png"} type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
