import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../components/home.js'
import Navbar from '../components/navbar.js'
export default function Index() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">VideoDAC!</a>
        </h1>
       
        <p className={styles.description}>
         Web3 Weekend by ETHGlobal submission
        </p>
       
        <Home/>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Livepeer
        </a>
      </footer>
    </div>
  )
}
