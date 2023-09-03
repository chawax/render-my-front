import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Movies - React Server Components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="bg-black p-4 sticky top-0">
          <Link href="/movies">
            <h1 className="text-3xl text-white font-bold">My Movies</h1>
          </Link>
          <span className="text-white">React Server Components</span>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
