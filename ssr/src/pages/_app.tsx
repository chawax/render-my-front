import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <h1>My Movies</h1>
          </Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
