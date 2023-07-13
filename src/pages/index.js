import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getSession, useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-secondary to-accent text-base-content'>
      <Head>
        <title>Home Page</title>
      </Head>

      <Layout>
        {session ? (
          <User session={session} handleSignOut={handleSignOut} />
        ) : (
          <Guest />
        )}
      </Layout>
    </div>
  );
}

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='text-white p-4 text-center shadow-md bg-primary'>
        <h1 className='text-2xl font-semibold'>KafkaTrace</h1>
      </header>

      <main className='flex-grow container mx-auto p-4 space-y-4'>
        {children}
      </main>

      <footer className='text-white p-4 text-center shadow-md bg-primary'>
        <p className='text-lg'>© {new Date().getFullYear()} KafkaTrace</p>
      </footer>
    </div>
  );
};

function Guest() {
  return (
    <main className='flex flex-col items-center justify-center space-y-4'>
      <h3 className='text-3xl font-semibold'>Welcome to KafkaTrace</h3>
      <p className='text-lg text-center'>
        Discover the power of distributed tracing!
      </p>

      <div>
        <Link href='/login'>
          <a className='btn btn-primary'>Sign In</a>
        </Link>
      </div>
    </main>
  );
}

function User({ session, handleSignOut }) {
  return (
    <main className='flex flex-col items-center space-y-8'>
      <h3 className='text-3xl font-semibold'>
        Welcome back, {session.user.name}!
      </h3>
      <div className='bg-white p-4 shadow-md rounded-lg'>
        <h5 className='text-xl font-semibold'>User Information</h5>
        <p className='text-lg'>Name: {session.user.name}</p>
        <p className='text-lg'>Email: {session.user.email}</p>
      </div>

      <div className='flex flex-col space-y-4'>
        <Link href='/profile'>
          <a className='btn btn-primary'>Profile Page</a>
        </Link>
        <Link href='http://localhost:16686'>
          <a className='btn btn-primary'>Jaeger UI</a>
        </Link>
        <Link href='http://localhost:9411'>
          <a className='btn btn-primary'>Zipkin UI</a>
        </Link>
        <Link href='http://localhost:9090'>
          <a className='btn btn-primary'>Prometheus</a>
        </Link>
      </div>

      <div>
        <button onClick={handleSignOut} className='btn btn-primary'>
          Sign Out
        </button>
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
