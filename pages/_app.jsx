import "../styles/globals.css";
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
	  <>
	<Script id='metrika'>
	  {`
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(89889569, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      });

      ym(95521952, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });

      new Image().src = "https://counter.yadro.ru/hit?r"+
      escape(document.referrer)+((typeof(screen)=="undefined")?"":
      ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
      screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
      ";h"+escape(document.title.substring(0,150))+
      ";"+Math.random();

		  `}
	  </Script>
	  <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/89889569?ut=noindex" />
        <img src="https://mc.yandex.ru/watch/95521952?ut=noindex" />
      </div>
    </noscript>
      <Component {...pageProps} />
	  </>
  );
}

export default MyApp;
