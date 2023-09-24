import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <Link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}