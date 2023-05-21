import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="This is a bloging website to solve the problems of coders" />
        <meta name="keywords" content="Hunting coders, html,css,javascript, nextjs, reactjs, python,coding blogs, problem solving" ></meta>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      
      
      <main className={styles.main}>

        <h1 className={styles.title}>
          HUNTING CODERS
        </h1>
        <Image className={styles.image} src="/coding.jpeg" alt='image' width={300} height={250} priority ></Image>

        <p className={styles.description}>
          Blogs for a hunting coder by a hunting coder
        </p>


      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
