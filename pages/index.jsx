import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <Layout
      title="Next.js App"
      description="Mi primera aplicación Next.js"
      home
    >
      <div className={styles.displayCenter}>
        <h1>Bienvenido</h1>
      </div>
    </Layout>
  )
}
