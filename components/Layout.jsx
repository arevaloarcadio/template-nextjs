import styles from "../styles/Layout.module.css";
import Head from "next/head";
import TRANSITION from '../utils/transition' 
import Link from "next/link";
import { LazyMotion,domAnimation, m } from "framer-motion";
import Header from './Header'

export const siteTitle = "Mi sitio web con next.js";

const pageMotionProps = {
  initial: {opacity: 0},
  animate: {
    opacity:1,
    transition:{
      duration: TRANSITION.DURATION,
      ease: TRANSITION.EASE
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
      delay: TRANSITION.DURATION,
      ease: TRANSITION.EASE
    }
  }
}

export default function Layout({ children, home, title, description }) {
  return (
    <LazyMotion features={domAnimation}>
      <div 
        className={styles.container}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
        
        <Header/>

        <m.main {...pageMotionProps}>{children}</m.main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
          </div>
        )}
      </div>
    </LazyMotion>
  );
}

Layout.defaultProps = {
  title: "Mi sitio web con Next",
  description: "Este es un sitio web para aprender con next.js",
};