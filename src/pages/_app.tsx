/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import GlobalStyles from "styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="description" content="Nubank Redesign" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
