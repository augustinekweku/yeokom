import type { AppProps } from "next/app";
import "../public/css/animate.css";
import "../public/js/loader.js";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/style.scss";
import CustomScript from "@/components/CustomScript";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomScript />
      <Component {...pageProps} />
    </>
  );
}
