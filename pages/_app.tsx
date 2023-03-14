import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Script from 'next/script';

import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0f3443',
    secondary: '#34e89e'
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KYV47DHCFX"
      />
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KYV47DHCFX', {
            page_path: window.location.pathname,
          });
        `
        }}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
