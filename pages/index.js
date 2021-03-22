import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{name}</div>
      <main className={styles.main}>
        <Link href="/about/456?a=1">关于</Link>
        <Link href="/my">我的</Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
