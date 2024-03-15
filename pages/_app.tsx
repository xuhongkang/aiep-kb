import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AI-EP Knowledge Base</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}