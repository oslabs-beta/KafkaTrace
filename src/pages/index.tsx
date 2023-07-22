import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, ReactPropTypes} from 'react';
import { getSession, useSession, signOut } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Props } from 'tippy.js';
import { AppPropsType } from 'next/dist/shared/lib/utils';

export default function Home() {
  const { data: session } = useSession();

  const [showUI, setShowUI] = useState(
    'data:text/html,<html><body><h2 style="color: white; text-align: center; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Welcome! Please click on a button to view its UI.</h2></body></html>'
  );

  function handleSignOut() {
    signOut();
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-800 to-blue-600 text-gray-200'>
      <Head>
        <title>Home Page</title>
      </Head>

      <Layout handleSignOut={handleSignOut} setShowUI={setShowUI}>
        {session ? (
          <User
            session={session}
            handleSignOut={handleSignOut}
            showUI={showUI}
          />
        ) : (
          <Guest />
        )}
      </Layout>
    </div>
  );
}

const Layout = ({ children, handleSignOut, setShowUI }: any) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex justify-between items-center p-4 shadow-md bg-gray-800'>
        <h1 className='text-4xl font-semibold text-blue-400'>KafkaTrace</h1>
        <nav className='flex space-x-4'>
          <button
            onClick={() => setShowUI('http://localhost:16686')}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
            Jaeger UI
          </button>
          <button
            onClick={() => setShowUI('http://localhost:9411')}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
            Zipkin UI
          </button>
          <button
            onClick={() => setShowUI('http://localhost:9090')}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
            Prometheus
          </button>
          <button
            onClick={handleSignOut}
            className='px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 border-2 border-red-600 hover:scale-105 transition duration-200'>
            Sign Out
          </button>
        </nav>
      </header>

      <main className='flex-grow container mx-auto p-4 space-y-4'>
        {children}
      </main>

      <footer className='flex items-center justify-between px-8 py-4 shadow-md'>
        <nav className='space-x-4'>
          <Link href='/contact-us'>
            <a className='text-fun hover:underline'>Contact Us</a>
          </Link>
          <Link href='/about'>
            <a className='text-fun hover:underline'>About</a>
          </Link>
          <Link href='/privacy'>
            <a className='text-fun hover:underline'>Privacy Policy</a>
          </Link>
          <Link href='/terms'>
            <a className='text-fun hover:underline'>Terms & Conditions</a>
          </Link>
        </nav>
        <p className='text-lg text-fun'>
          © {new Date().getFullYear()} KafkaTrace
        </p>
      </footer>
    </div>
  );
};

function Guest() {
  return (
    <main className='flex flex-col items-center justify-center space-y-4'>
      <h3 className='text-4xl font-semibold text-blue-400'>
        Welcome to KafkaTrace
      </h3>
      <p className='text-lg text-center'>
        Discover the power of distributed tracing!
      </p>

      <div>
        <Link href='/login'>
          <a className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600'>
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}

// function User({ session, handleSignOut }: any) {
function User({ session, showUI }: any) {
  return (
    <main className='flex flex-col items-center space-y-8'>
      <h3 className='text-4xl text-blue-400'>
        Welcome back, {session.user.name}!
      </h3>
      <div className='w-full max-w-md bg-gray-800 p-4 shadow-md rounded-lg'>
        <h5 className='text-2xl text-blue-400'>User Information</h5>
        <p className='text-m text-white'>Name: {session.user.name}</p>
        <p className='text-m text-white'>Email: {session.user.email}</p>
      </div>

      <iframe
        src={showUI}
        width='100%'
        height='100%'
        className='rounded-lg'
        style={{ minHeight: '475px' }}
      />
    </main>
  );
}

export async function getServerSideProps({ req }: any) {
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
