import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Layout from '../src/components/Layout';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (      
    <React.Fragment>
    <Head>
      <title>My page</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Layout>
      <Component {...pageProps} />

      </Layout>
    </ApolloProvider>

    </ThemeProvider>
  </React.Fragment>
  );
}

export default MyApp;