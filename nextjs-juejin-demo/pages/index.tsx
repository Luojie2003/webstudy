import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>掘金小册</title>
        <meta name="description" content="bug创造队" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hello World</h1>
        </div>
      </main>
    </>
  )
}
