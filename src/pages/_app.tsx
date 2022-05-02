import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppProvider } from '../context/AppContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <title>Blog da Malu</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Blog da Malu" />
        <meta name="description" content="Blog da Malu" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,
      user-scalable=0"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8611189972849907"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
