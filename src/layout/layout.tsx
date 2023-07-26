import { PropsWithChildren } from 'react';
import Link from 'next/link';


const Layout = (props: PropsWithChildren) => {
  return (
    <div className='layout min-h-screen flex flex-col bg-#fbfbfb text-black'>
      <header className='text-black p-4 text-left shadow-md'>
      <Link href='/'><a className='text-3xl text-black'>KafkaTrace</a></Link>
      </header>

      <main className='flex-grow container mx-auto p-4 space-y-4'>
        {props.children}
      </main>

      <footer className='text-black p-4 text-center shadow-md'>
        <p className='text-lg'>© {new Date().getFullYear()} KafkaTrace</p>
      </footer>
    </div>
  );
};

export default Layout;
