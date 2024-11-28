import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import YandexMetrika from "../components/YaMetrika";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script>
        {`
          {
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "Kitchen Masters 07 - изготовление мебели в КБР",
      "url" : "https://kitchen-masters07.com"
    }`}
      </Script>
      <Script id="metrika" strategy="afterInteractive">
        {`
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(99067508, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
		  `}
      </Script>
      <Component {...pageProps} />
      <YandexMetrika />
    </>
  );
}

export default MyApp;
