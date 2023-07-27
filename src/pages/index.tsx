import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { useState, useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export default function Root() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className='m-0 min-h-screen bg-#fbfbfb text-#fbfbfb-100'>
      <Navbar />
      <main className='mx-auto py-12'>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: '#1f2937',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 2.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
            fullScreen: {
              enable: false,
            },
          }}
        />
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
  sectionTitle: 'text-4xl font-bold mb-6 text-black bg-#fbfbfb',
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
  <nav className='fixed top-0 w-full z-50 p-2 px-8 backdrop-saturate-200 shadow-lg bg-opacity-90 backdrop-blur'>
    <div className='mx-auto flex justify-between items-center'>
      <h1 className='text-2xl font-semibold text-black font-costar'>
        KafkaTrace
      </h1>

      <div className='space-x-4'>
        <LinkButton href='https://medium.com/@kafkatrace/kafka-trace-9eba2ac16eae'>
          Medium
        </LinkButton>
        <LinkButton href='https://www.npmjs.com/package/kafkatrace?activeTab=readme'>
          NPM
        </LinkButton>
        <LinkButton href='https://github.com/oslabs-beta/kafkatrace-npm-package'>
          Github
        </LinkButton>
        <LoginButton href='/login'>Login</LoginButton>
        <SignupButton href='/register'>Sign Up</SignupButton>
      </div>
    </div>
  </nav>
);
interface hrefChildrenType {
  href: string;
  children: string;
}

const LoginButton = ({ href, children }: hrefChildrenType) => (
  <Link href={href}>
    <a className='px-2 py-1 border-2 border-grey rounded-lg font-akkurat text-[#575657] hover:bg-neutral-100'>
      {children}
    </a>
  </Link>
);

const LinkButton = ({ href, children }: hrefChildrenType) => (
  <Link href={href}>
    <a className='font-akkurat text-[#575657] hover:text-#fbfbfb-400 transition duration-200'>
      {children}
    </a>
  </Link>
);

const Hero = () => {
  return (
    <section className='bg-opacity-0 relative text-center py-32 text-white overflow-hidden'>
      <div className='transform transition-transform hover:text-decot'>
        <h2 className='text-5xl font-akkurat font-bold mb-4 duration-700'>
          Welcome to{' '}
          <span className='bg-clip-text font-akkurat text-white bg-gradient-to-r from-#fbfbfb-600 to-#fbfbfb-400 hover:from-#fbfbfb-500 hover:to-#fbfbfb-700'>
            KafkaTrace
          </span>
        </h2>
        <p className='text-2xl font-akkurat font-semibold mb-12 transform transition-transform duration-700 hover:scale-105'>
          Revolutionary Kafka monitoring for the future.
        </p>
        <div className='transform transition-transform duration-700 hover:scale-110'>
          <PrimaryButton href='https://www.npmjs.com/package/kafkatrace'>
            Begin Journey
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

const PrimaryButton = ({ href, children }: hrefChildrenType) => (
  <a
    href={href}
    className={`font-akkurat border-white border text-white px-8 py-3 rounded-xl shadow-md transform transition motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-#fbfbfb-500 inline-block ${commonStyling.button}`}>
    {children}
  </a>
);

const SignupButton = ({ href, children }: hrefChildrenType) => (
  <Link href={href}>
    <a className='px-2 py-1 border-2 border-grey rounded-lg font-akkurat text-[#575657] hover:bg-neutral-100'>
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
    <div className='mt-16 flex justify-center p-4 from-black to-white-500'>
      <div className='flex'>
        <pre className='p-4 bg-gray-800 text-white border-neutral-500 border-l-4 pl-4 rounded-lg'>
          <code className='language-javascript'>npm install kafkatrace</code>
        </pre>
      </div>
      <div className='flex'>
        <button
          onClick={handleCopy}
          className={`flex items-center rounded-xl shadow-none border-2 mt-2 md:mt-0 md:ml-4 space-x-2 ${
            copied ? 'bg-#fbfbfb' : commonStyling.button // Change background color when copied
          }`}>
          <span className='font-akkurat text-[#575657]'>
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
  <div className='border-2 p-4 max-w-lg mx-auto my-8 shadow-inner rounded-lg bg-white e-105'>
    <TerminalHeader className='mb-2' />
    <pre style={codeStyles}>
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

//
const Features = () => (
  <section className='py-16 px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {[
      {
        icon: '⚡',
        title: 'Easy and Quick',
        description:
          'Easy to Install and Quick To Implement. Get Started Effortlessly',
      },
      {
        icon: '📦',
        title: 'All-in-One',
        description: 'Modern Dashboard Integration with Kafka Clients.',
      },
      {
        icon: '👀',
        title: 'Trace In Seconds',
        description:
          'Open Authentication for Users to View Their Traces Privately',
      },
    ].map((feature, index) => (
      <FeatureBlock key={index} {...feature} />
    ))}
  </section>
);

const FeatureBlock = ({ icon, title, description }: any) => (
  <div className='font-akkurat text-black p-8 border-2 shadow-none transition duration-300 ease-in-out transform hover:scale-105'>
    <div className='text-6xl mb-8'>{icon}</div>
    <h3 className='text-3xl mb-6 font-bold'>{title}</h3>
    <p className='text-lg'>{description}</p>
  </div>
);

const Teams = () => (
  <section className='mt-20 py-16 text-gray-300'>
    <h2 className='font-akkurat text-black text-4xl mb-16 ml-36'>
      Meet the team
    </h2>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {[
          {
            name: 'Navdeep Simmak',
            role: 'Software Engineer',
            img: '/assets/navi.jpeg',
            github: 'https://github.com/NaviSimmak',
            linkedin: 'https://www.linkedin.com/in/navdeep-simmak/',
          },
          {
            name: 'Wai San Gu',
            role: 'Software Engineer',
            img: '/assets/waisan.png',
            github: 'https://github.com/waisangu',
            linkedin: 'https://www.linkedin.com/in/waisangu/',
          },
          {
            name: 'Felix Chen',
            role: 'Software Engineer',
            img: '/assets/felix.png',
            github: 'https://github.com/flexzchen',
            linkedin: 'https://www.linkedin.com/in/felixzchen/',
          },
          {
            name: 'Alston Nguyen',
            role: 'Software Engineer',
            img: '/assets/alston.png',
            github: 'https://github.com/alstonnguyen',
            linkedin: 'https://www.linkedin.com/in/alston-s-nguyen/',
          },
        ].map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

const GitHubButton = ({ github }: any) => (
  <a
    href={github}
    target='_blank'
    rel='noopener noreferrer'
    className='text-gray-800'>
    <svg
      className='h-10 w-10 my-2 mx-4'
      viewBox='0 0 24 24'
      fill='currentColor'>
      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
    </svg>
  </a>
);
const LinkedInButton = ({ linkedin }: any) => (
  <a
    href={linkedin}
    target='_blank'
    rel='noopener noreferrer'
    className='text-gray-800'>
    <svg
      className='h-10 w-10 my-2 mx-4'
      viewBox='0 0 24 24'
      fill='currentColor'>
      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
    </svg>
  </a>
);
const TeamMember = ({ img, name, role, github, linkedin }: any) => (
  <div className='group flex flex-col items-center p-6'>
    <h3 className='text-2xl font-bold mb-4 font-akkurat text-black'>{name}</h3>
    <div className='relative w-40 h-40 mb-8 overflow-hidden rounded-full'>
      <Image
        src={img}
        layout='fill'
        alt={`${name}, ${role}`}
        className='w-full h-full object-cover border-4 transition-transform duration-300'
      />
    </div>
    <p className='text-lg font-akkurat text-[#575657] mb-4'>{role}</p>
    <div className='flex items-center'>
      <GitHubButton github={github} />
      <LinkedInButton linkedin={linkedin} />
    </div>
  </div>
);
