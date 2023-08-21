import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Movies - Server Side Rendering</title>
      </Head>
      <header className="bg-black p-4 sticky top-0">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">My Movies</h1>
        </Link>
      </header>
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
