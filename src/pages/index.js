import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Book from '@/components/home/Book'
import Railway_home from '@/components/home/Railway_home'
import GoTo from '@/components/home/GoTo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
    <Head >
    <title>Indian Railway</title>
    <meta name="keywords" content="sathi cloud" />
    <link rel="shortcut icon" href="/favicon.png" />
    </Head>
   <Railway_home/>
   <GoTo/>
   <Book/>
   </Layout>
    </>
    )
}
