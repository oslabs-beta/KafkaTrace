import { PropsWithChildren } from 'react';
import Link from 'next/link';


const Layout = (props: PropsWithChildren) => {
  return (
    <div className='layout min-h-screen flex flex-col bg-#fbfbfb text-black'>
      <header className='fixed top-0 w-full z-50 p-2 px-8 bg-white backdrop-saturate-200 shadow'>
    <Link href='/'><a className='text-2xl font-semibold text-black font-costar'>KafkaTrace</a></Link>
      <nav className='space-x-4'>
      </nav>
    </header>

      <main className='mx-auto p-4 space-y-4'>
        {props.children}
      </main>

      <footer className='text-black p-4 text-center shadow-md'>
        <p className='text-lg'>© {new Date().getFullYear()} KafkaTrace</p>
      </footer>
    </div>
  );
};

export default Layout;
