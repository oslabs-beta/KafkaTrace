import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { getSession, useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className={styles.main}>
      <h3 className={styles.title}>Guest Homepage</h3>

      <div className={styles.linksContainer}>
        <Link href={'/login'}>
          <a className={styles.link}>Sign In</a>
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className={styles.main}>
      <h3 className={styles.title}>Authorize User Homepage</h3>

      <div className={styles.details}>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className={styles.linksContainer}>
        <button onClick={handleSignOut} className={styles.button}>
          Sign Out
        </button>
      </div>

      <div className={styles.linksContainer}>
        <Link href={'/profile'}>
          <a className={styles.link}>Profile Page</a>
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
