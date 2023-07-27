import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getSession, useSession, signOut } from 'next-auth/react';

interface LayoutProps {
  children: ReactNode,
  handleSignOut: any,
  setShowUI: any
}

interface SessionProps {
  session: any,
  showUI: any
}

interface getServerSidePropsProps {
  req: any
}

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
        {session ? <User session={session} showUI={showUI} /> : <Guest />}
      </Layout>
    </div>
  );
}

const Layout = ({ children, handleSignOut, setShowUI }: LayoutProps) => (
  <div className='layout min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-gray-100'>
    <header className='flex items-center justify-between p-2 px-8 bg-white backdrop-saturate-200 shadow shadow-lg backdrop-blur'>
    <Link href='/'><a className='text-2xl font-semibold text-black font-costar'>KafkaTrace</a></Link>
      <nav className='flex space-x-4'>
        <button
          onClick={() => setShowUI('http://localhost:16686')}
          className='px-4 py-1 bg-blue-500 font-akkurat text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
          Jaeger UI
        </button>
        <button
          onClick={() => setShowUI('http://localhost:9411')}
          className='px-4 py-1 bg-blue-500 font-akkurat text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
          Zipkin UI
        </button>
        <button
          onClick={() => setShowUI('http://localhost:9090')}
          className='px-4 py-1 bg-blue-500 font-akkurat text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
          Prometheus
        </button>
        <button
          onClick={handleSignOut}
          className='px-4 py-1 bg-red-500 font-akkurat text-white rounded-lg shadow-md hover:bg-red-600 border-2 border-red-600 hover:scale-105 transition duration-200'>
          Sign Out
        </button>
      </nav>
    </header>

    <main className='flex-grow container mx-auto p-4 space-y-4 max-w-3xl'>
      {children}
    </main>
  </div>
);

function Guest() {
  return (
    <section className='p-6 m-10 rounded-lg shadow-lg text-center space-y-6 bg-gradient-to-r from-gray-700 to-teal-500'>
      <h1 className='text-4xl font-akkurat text-[#575657] font-bold mb-6 text-gradient bg-gradient-to-r from-gray-700 to-teal-500 font-heading'>
        Welcome to KafkaTrace
      </h1>
      <p className='text-xl text-white mb-5 font-akkurat text-[#575657]'>
        Discover the power of distributed tracing!
      </p>
      <div>
        <Link href='/login'>
          <a className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600'>
            Sign In
          </a>
        </Link>
      </div>
    </section>
  );
}

function User({ session, showUI }: SessionProps) {
  return (
    <div className='w-full h-full'>
    <main className='flex flex-col items-center space-y-8'>
      <h3 className='text-4xl text-blue-400 font-akkurat'>
        Welcome back, {session.user.name}!
      </h3>
      <div className='w-full max-w-md bg-gray-800 p-4 shadow-md rounded-lg'>
        <h5 className='text-2xl font-akkurat text-blue-400'>User Information</h5>
        <p className='font-akkurat text-white'>Name: {session.user.name}</p>
        <p className='font-akkurat text-white'>Email: {session.user.email}</p>
      </div>

      <iframe
        src={showUI}
        width='100%'
        height='100%'
        className='w-screen h-screen'
      />
    </main>
    </div>
  );
}

export async function getServerSideProps({ req }: getServerSidePropsProps) {
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
