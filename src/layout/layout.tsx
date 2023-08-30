import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Layout = (props: PropsWithChildren) => {
  return (
    <div className='layout min-h-screen flex flex-col bg-#fbfbfb text-black'>
     <header className='fixed top-0 w-full z-50 p-1 px-8 backdrop-saturate-200 shadow-md bg-opacity-90 backdrop-blur'>
      <Link href='/'>
        <a>
          <Image
              src="/assets/LogoWithText-Transparent.png"
              width={135}
              height={35}
              alt="KafkaTrace"
            />
        </a>
      </Link>
    </header>

      <main className='mx-auto p-4 space-y-4 mt-20'>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
