import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/Layout'
import Book from '@/components/home/Book'
import Crowd from '@/components/passenger/Crowd'
import Crime from '@/components/passenger/Crime'
import Work from '@/components/passenger/Work'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout>
    <Head >
    <title>Indian Railway</title>                      /Users/gautam/Desktop/myFolder/SIH Hackthon/sathicloud/src/components/passenger/Crime.js
    <meta name="keywords" content="sathi cloud" />
    <link rel="shortcut icon" href="/favicon.png" />
    </Head>
   <Crowd/>
   <Crime/>
   <Work/>
   <Book/>
   </Layout>
    </>
    )
}
