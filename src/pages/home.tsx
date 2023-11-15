import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getSession, useSession, signOut } from 'next-auth/react';
import Layout from '../components/HomeLayout';

interface SessionProps {
  session: any,
  showUI: any
}

interface getServerSidePropsProps {
  req: any
}

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

export default function Home() {

  const { data: session } = useSession();

  const [showUI, setShowUI] = useState(
    'data:text/html,<html><body><h2 style="color: white; text-align: center; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Please click on a button to view its UI</h2></body></html>'
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
