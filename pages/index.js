import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="og:title" content="Wavely - Find The Job That You Want" />
        <meta name="og:url" content="https://www.wavely.com/talent" />
        <meta name="og:site_name" content="Wavely" />
        <meta property="og:type" content="business.business" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@wavely_app" />
        <meta name="twitter:title" content="Wavely" />
        <meta name="google-site-verification" content="EA2JrUWQ7koRy7S83CXczwoDHJrru-iyUxWjSZ1MAAU" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="og:image" content="/images/og_images/https://ucarecdn.com/26c3adb2-f069-4e00-b35a-0d9a9dad0be2/-/preview/400x400/" />
        <meta name="twitter:image" content="/images/og_images/https://ucarecdn.com/26c3adb2-f069-4e00-b35a-0d9a9dad0be2/-/preview/400x400/" />
        <meta property="business:contact_data:locality" content="Palo Alto" />
        <meta property="business:contact_data:region" content="California" />
        <meta name="og:description" content="You are a step closer to finding a job that you want. Chat with your future manager directly and get hired now!" />
        <meta name="twitter:description" content="You are a step closer to finding a job that you want. Chat with your future manager directly and get hired now!" />
        <meta name="next-head-count" content="21" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
