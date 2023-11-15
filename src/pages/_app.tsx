import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import Head from 'next/head';
import './styles/tailwind.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>KafkaTrace: Monitor Kafka with OpenTelemetry</title>
        <meta name='description' content='An application for ...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
