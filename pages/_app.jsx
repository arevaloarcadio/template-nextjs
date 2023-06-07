import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>NextTasks</title>
      </Head>
      <AnimatePresence initial="true">
        <Component {...pageProps} key={router.asPath} />
        <ToastContainer/>
      </AnimatePresence>
    </>
  );
}

export default MyApp;

