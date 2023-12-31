import Link from 'next/link';
import Image from 'next/image';

export default function Navbar () {
    return (
    <nav className='fixed top-0 w-full z-50 p-1 md:px-8 backdrop-saturate-200 shadow-md bg-opacity-90 backdrop-blur'>
      <div className='mx-auto flex justify-between items-center'>
        <div className='shrink-0'>
          <Image
            src="/assets/LogoWithText-Transparent.png"
            width={135}
            height={35}
            alt="KafkaTrace"
          />
        </div>
        <div className='space-x-4'>
          <a className='font-akkurat text-[#575657]' href='https://medium.com/@kafkatrace/kafka-trace-9eba2ac16eae' target='_blank' rel='noopener noreferrer'>
            Medium
          </a>
          <a className='font-akkurat text-[#575657]' href='https://github.com/oslabs-beta/kafkatrace-npm-package' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
          <Link href='/login'>
            <a className='sm:inline hidden px-2 py-1 border-2 border-grey rounded-lg font-akkurat text-[#575657] hover:bg-neutral-100'>
              Login
            </a>
          </Link>
          {/* <Link href='/register'>
            <a className='sm:inline hidden px-2 py-1 border-2 border-grey rounded-lg font-akkurat text-[#575657] hover:bg-neutral-100'>
              Signup
            </a>
          </Link> */}
        </div>
      </div>
    </nav>
    )
}
