import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/images/logo.svg" />
          <link
            rel="preload"
            href="/fonts/Mirande.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/NewYork.otf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/YesevaOne.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <script
            id="Adsense-id"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8611189972849907"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <ColorModeScript />
          <NextScript />
        </body>
      </Html>
    );
  }
}
