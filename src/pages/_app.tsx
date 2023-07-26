import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import Head from 'next/head';
import './styles/tailwind.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   import('tippy.js').then(({ default: tippy }) => {
  //     tippy('[data-tippy-content]');
  //   });
  // }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>KafkaTrace: Tracing Reimagined</title>
        <meta name='description' content='An application for ...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
