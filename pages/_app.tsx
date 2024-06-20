import type { AppProps } from "next/app";
import "../public/css/animate.css";
import "../public/js/loader.js";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/style.scss";
import CustomScript from "@/components/CustomScript";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomScript />
      <Component {...pageProps} />
    </>
  );
}
