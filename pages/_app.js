import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          src="https://kit.fontawesome.com/c3ac91c552.js"
          crossorigin="anonymous"
        ></Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
