import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { useState } from 'react'; // Import the useState hook

export default function Root() {
  return (
    <div className='m-0 min-h-screen bg-#fbfbfb text-#fbfbfb-100'>
      <Navbar />
      <main className='container mx-auto py-12'>
        <Hero />
        <InstallComponent />
        <CodeSnippet />
        <Features />
        <Teams />
      </main>
    </div>
  );
}
const commonStyling = {
  button:
    'bg-#fbfbfb hover:from-gray-600 hover:to-#fbfbfb-400 active:from-#fbfbfb-600 text-black px-8 py-3 rounded-none shadow-2xl transform transition hover:scale-105 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800',
  sectionTitle:
    'text-4xl font-bold mb-6 text-black bg-#fbfbfb',
  sectionSubtitle: 'text-xl mb-8',
  professionalFont: 'font-mono',
  futuristicFont: 'font-heading',
  teal: 'text-#fbfbfb-500',
  white: 'text-black',
};

const codeStyles: React.CSSProperties = {
  backgroundColor: '#1f2937',
  color: 'black',
  padding: '16px',
  borderRadius: '8px',
  overflowX: 'scroll',
  // Add other styles from the Prism theme as you see fit...
};

const Navbar = () => (
  <nav className='fixed top-0 w-full z-50 p-6 bg-#fbfbfb backdrop-saturate-200'>
    <div className='container mx-auto flex justify-between items-center'>
      <h1 className='text-2xl text-black'>
        KafkaTrace
      </h1>
      <div className='space-x-4'>
        <LinkButton href='/about'>Medium</LinkButton>
        <LinkButton href='https://www.npmjs.com/package/kafkatrace?activeTab=readme'>npm</LinkButton>
        <LinkButton href='https://github.com/oslabs-beta/kafkatrace-npm-package'>Github</LinkButton>
        <LoginButton href='/login'>Login</LoginButton>
        <SignupButton href='/register'>Sign Up</SignupButton>
      </div>
    </div>
  </nav>
);
interface hrefChildrenType {href: string, children: string}
const LoginButton = ({ href, children }: hrefChildrenType) => (
  <Link href={href}>
    <a
      className={`px-6 py-2 rounded-full border-2 border-black bg-gradient-to-r from-#fbfbfb-500 to-#fbfbfb-700 hover:from-#fbfbfb-400 hover:to-gray-600 text-black shadow-md transform transition hover:scale-105 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#fbfbfb-600 ${commonStyling.button}`}>
      {children}
    </a>
  </Link>
);

const LinkButton = ({ href, children }:hrefChildrenType) => (
  <Link href={href}>
    <a className='text-black hover:text-#fbfbfb-400 transition duration-200'>
      {children}
    </a>
  </Link>
);

const Hero = () => (
  <section className='relative text-center py-32 text-black overflow-hidden'>
    {/* Background image with gradient overlay */}
    <div
      className='absolute top-0 left-0 right-0 bottom-0 z-[-1]'
      style={{
        backgroundImage: "url('/path/to/futuristic-image.jpg')",
        backgroundBlendMode: 'overlay',
        background:
          '#fbfbfb',
      }}
    />

    <div className='transform transition-transform hover:text-decot'>
      {/* Hero title */}
      <h2 className='text-5xl font-bold mb-4 text-#fbfbfb-500 duration-700'>
        Welcome to{' '}
        <span className='bg-clip-text text-black bg-gradient-to-r from-#fbfbfb-600 to-#fbfbfb-400 hover:from-#fbfbfb-500 hover:to-#fbfbfb-700'>
          KafkaTrace
        </span>
      </h2>
      {/* Hero subtitle */}
      <p className='text-2xl font-semibold mb-12 transform transition-transform duration-700 hover:scale-105'>
        Revolutionary Kafka monitoring for the future.
      </p>
      {/* Call-to-action button */}
      <div className='transform transition-transform duration-700 hover:scale-110'>
        <PrimaryButton href='https://www.npmjs.com/package/kafkatrace'>Begin Journey</PrimaryButton>
      </div>
    </div>
  </section>
);

const PrimaryButton = ({ href, children }:hrefChildrenType) => (
  <a
    href={href}
    className={`bg:#fbfbfb text-black px-8 py-3 rounded-lg shadow-md transform transition motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-#fbfbfb-500 inline-block ${commonStyling.button}`}>
    {children}
  </a>
);

const SignupButton = ({ href, children }:hrefChildrenType) => (
  <Link href={href}>
    <a
      className={`px-6 py-2 rounded-full border-2 border-black bg-gradient-to-r from-#fbfbfb-500 to-#fbfbfb-700 hover:from-#fbfbfb-400 hover:to-gray-600 text-black shadow-md transform transition hover:scale-105 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#fbfbfb-600 ${commonStyling.button}`}>
      {children}
    </a>
  </Link>
);

const InstallComponent = () => {
  const [copied, setCopied] = useState(false); // State to track if copied to clipboard

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install kafkatrace');
    setCopied(true); // Set copied to true when the button is clicked
    // Reset the copied state to false after a delay of 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className='mt-8 flex justify-center p-4 from-black to-white-500 hover:from-black hover:to-white-400 hover:scale-105 duration-300 ease-in-out'>
      <div className='flex'>
      <pre className='p-4 bg-gray-800 text-white border-white-500 border-l-4 pl-4'>
        <code className='language-javascript'>npm install kafkatrace</code>
      </pre>
      </div>
      <div className='flex'>
      <button
        onClick={handleCopy}
        className={`flex items-center mt-2 md:mt-0 md:ml-4 space-x-2  ${
          copied ? 'bg-#fbfbfb' : commonStyling.button // Change background color when copied
        }`}>
        {copied ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-check animate-pulse'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M3.28 9.97a.5.5 0 0 1 .05-.7l4.08-3.07a.5.5 0 0 1 .63 0l3.5 2.5a.5.5 0 0 1 .18.67l-1.5 2a.5.5 0 0 1-.66.16L7.5 9.2l-2.53 1.9a.5.5 0 0 1-.69-.23z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-clipboard'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3 3a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1z'
            />
            <path
              fillRule='evenodd'
              d='M5 2h6a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1zm6 2H5a1 1 0 0 0-1 1v1h8V5a1 1 0 0 0-1-1zm0 3H5a1 1 0 0 1-1-1v1h8V9a1 1 0 0 1-1-1zm-1 3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h4v4z'
            />
          </svg>
        )}
        <span className='text-black text-sm'>
          {copied ? 'Copied to clipboard' : 'Copy'}
        </span>
      </button>
      </div>
    </div>
  );
};

const TerminalHeader = ({ className = '' }: any) => (
  <div
    className={`flex items-center justify-start p-2 bg-#fbfbfb text-black-400 space-x-1 border-b border-white-500 ${className}`}>
    <span className='bg-red-600 w-3 h-3 rounded-full animate-bounce'></span>
    <span className='bg-yellow-500 w-3 h-3 rounded-full animate-bounce delay-150'></span>
    <span className='bg-green-600 w-3 h-3 rounded-full animate-bounce delay-300'></span>
  </div>
);

const CodeSnippet = () => (
  <div className='p-4 max-w-lg mx-auto my-8 shadow-inner bg-white hover:from-gray-600 hover:to-white-400 transition-transform transform hover:scale-105 duration-300 ease-in-out relative'>
    <TerminalHeader className='mb-2' />
    <pre style = {codeStyles}>
      <code className='language-javascript'>
        {`import { composer } from 'kafkatrace';
composer();
import { tracer } from 'kafkatrace';
tracer('[Service Name]');
`}
      </code>
    </pre>
  </div>
);

const Features = () => (
  <section className='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {[
      {
        icon: '⚡',
        title: 'Lightweight',
        description: 'Instant, hot module reloading.',
      },
      {
        icon: '📦',
        title: 'Extensive Integrations',
        description: 'Effortless integration with myriad technologies.',
      },
      {
        icon: '🔒',
        title: 'Top-notch Security',
        description: 'Protecting your data with industry-best practices.',
      },
    ].map((feature, index) => (
      <FeatureBlock key={index} {...feature} />
    ))}
  </section>
);

const FeatureBlock = ({ icon, title, description }: any) => (
  <div
    className={`p-8 rounded-lg shadow-sm bg-#fbfbfb transition duration-300 ease-in-out transform hover:scale-105 ${commonStyling.button}`}>
    <div className='text-6xl mb-8 text-black-300'>{icon}</div>
    <h3 className='text-3xl mb-6 font-bold text-black-300'>{title}</h3>
    <p className='text-lg text-black-400'>{description}</p>
  </div>
);

const Teams = () => (
  <section className='py-16 bg-#fbfbfb from-black to-#fbfbfb-700 text-gray-300'>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {[
          {
            name: 'Navdeep Simmak',
            role: 'Software Engineer',
            img: '/assets/navi.jpeg',
          },
          {
            name: 'Wai San Gu',
            role: 'Software Engineer',
            img: '/assets/waisan.png',
          },
          {
            name: 'Felix Chen',
            role: 'Software Engineer',
            img: '/assets/felix.png',
          },
          {
            name: 'Alston Nguyen',
            role: 'Software Engineer',
            img: '/assets/alston.png',
          },
        ].map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

// TeamMember component
const TeamMember = ({ img, name, role }: any) => (
  <div className='group flex flex-col items-center p-6 shadow-md bg-#fbfbfb transform transition-transform duration-300 ease-in-out hover:scale-105'>
    <div className='relative w-40 h-40 mb-8 overflow-hidden rounded-full group-hover:rotate-6 transition-transform duration-300 ease-in-out'>
      <Image
        src={img}
        layout='fill'
        alt={`${name}, ${role}`}
        className='w-full h-full object-cover border-4 border-#fbfbfb-500 group-hover:rotate-[-6deg] transition-transform duration-300 shadow-lg'
      />
    </div>
    <h3 className='text-2xl font-bold mb-4 text-black'>{name}</h3>
    <p className='text-lg text-black'>{role}</p>
  </div>
);
