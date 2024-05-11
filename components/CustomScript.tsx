import Script from "next/script";

const CustomScript = () => {
  return (
    <>
      <Script src="/js/jquery-2.1.4.min.js" type="text/javascript"></Script>
      <Script src="/js/bootstrap.min.js" type="text/javascript"></Script>
      <Script src="/js/main.js" type="text/javascript"></Script>
    </>
  );
};

export default CustomScript;
