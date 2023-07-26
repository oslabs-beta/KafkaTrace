import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { useState } from 'react'; // Import the useState hook
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.



export default function Root() {
  return (
    <div className='m-0 min-h-screen bg-#fbfbfb text-#fbfbfb-100'>
      <Navbar />
      <main className='mx-auto py-12'>
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
  // flex items-center justify-between px-8 py-4 shadow-lg bg-opacity-90 backdrop-blur
  // fixed top-0 w-full z-50 p-6 bg-#fbfbfb backdrop-saturate-200
  <nav className='fixed top-0 w-full z-50 p-2 px-8 bg-white backdrop-saturate-200 shadow-lg bg-opacity-90 backdrop-blur'>
    <div className='mx-auto flex justify-between items-center'>
      <h1 className='text-2xl font-semibold text-black font-costar'>
        KafkaTrace
      </h1>

      <div className='space-x-4'>
        <LinkButton href='/about'>Medium</LinkButton>
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
    <a className='px-2 py-1 border-2 border-grey text-black hover:bg-neutral-100'>
      {children}
    </a>
  </Link>
);

const LinkButton = ({ href, children }: hrefChildrenType) => (
  <Link href={href}>
    <a className='text-black hover:text-#fbfbfb-400 transition duration-200'>
      {children}
    </a>
  </Link>
);


const Hero = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);

  return (  
    <>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#ffffff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
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
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
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
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
                fullScreen: { 
                  enable: true,
                }
            }}
        />
  <section className='relative text-center py-32 text-black overflow-hidden'>
  
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
        <PrimaryButton href='https://www.npmjs.com/package/kafkatrace'>
          Begin Journey
        </PrimaryButton>
      </div>
    </div>
  </section>
  </>
  )
};

const PrimaryButton = ({ href, children }: hrefChildrenType) => (
  <a
    href={href}
    className={`bg:#fbfbfb text-black px-8 py-3 rounded-lg shadow-md transform transition motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-#fbfbfb-500 inline-block ${commonStyling.button}`}>
    {children}
  </a>
);

const SignupButton = ({ href, children }: hrefChildrenType) => (
  <Link href={href}>
    <a className='px-2 py-1 border-2 border-grey text-black hover:bg-neutral-100'>
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
        <pre className='p-4 bg-gray-800 text-white border-neutral-500 border-l-4 pl-4 rounded-lg'>
          <code className='language-javascript'>npm install kafkatrace</code>
        </pre>
      </div>
      <div className='flex'>
        <button
          onClick={handleCopy}
          className={`flex items-center mt-2 md:mt-0 md:ml-4 space-x-2 rounded-md ${
            copied ? 'bg-#fbfbfb' : commonStyling.button // Change background color when copied
          }`}>
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
  <div className='p-4 max-w-lg mx-auto my-8 shadow-inner rounded-lg bg-white hover:from-gray-600 hover:to-white-400 transition-transform transform hover:scale-105 duration-300 ease-in-out relative'>
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
        icon: '🔒',
        title: 'Trace In Seconds and Safely',
        description:
          'Open Authentication for Users to View Their Traces Privately',
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

// TeamMember component
// const TeamMember = ({ img, name, role }: any) => (
//   <div className='group flex flex-col items-center p-6 shadow-md bg-#fbfbfb transform transition-transform duration-300 ease-in-out hover:scale-105'>
//     <div className='relative w-40 h-40 mb-8 overflow-hidden rounded-full group-hover:rotate-6 transition-transform duration-300 ease-in-out'>
//       <Image
//         src={img}
//         layout='fill'
//         alt={`${name}, ${role}`}
//         className='w-full h-full object-cover border-4 border-#fbfbfb-500 group-hover:rotate-[-6deg] transition-transform duration-300 shadow-lg'
//       />
//     </div>
//     <h3 className='text-2xl font-bold mb-4 text-black'>{name}</h3>
//     <p className='text-lg text-black'>{role}</p>
//   </div>
// );

const GitHubButton = ({ github }: any) => (
  <a
    href={github}
    target='_blank'
    rel='noopener noreferrer'
    className='inline-flex items-center bg-white border-2 border-gray-300 text-gray-800 p-3 px-6 rounded-lg shadow-lg transform transition-transform hover:bg-gray-100 duration-300 ease-in-out relative font-semibold hover:border-gray-400'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 mr-2'
      viewBox='0 0 24 24'
      fill='currentColor'>
      <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.308.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.91-.015 3.3 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
    </svg>
    GitHub
  </a>
);
const LinkedInButton = ({ linkedin }: any) => (
  <a
    href={linkedin}
    target='_blank'
    rel='noopener noreferrer'
    className='inline-flex items-center bg-white border-2 border-gray-300 text-gray-800 p-3 px-6 mt-4 rounded-lg shadow-lg transform transition-transform hover:bg-gray-100 duration-300 ease-in-out relative font-semibold hover:border-gray-400'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 mr-2'
      viewBox='0 0 24 24'
      fill='currentColor'>
      <path d='M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H6V9h2v10zM7 8H7c-0.55 0-1-0.45-1-1s0.45-1 1-1s1 0.45 1 1S7.55 8 7 8zM18 19h-2v-4c0-1.1-0.9-2-2-2s-2 0.9-2 2v4h-2V9h2v2c0.41-0.75 1.46-1.5 2.5-1.5s2.09 0.74 2.5 1.5V9h2v10z'></path>
    </svg>
    LinkedIn
  </a>
);
const TeamMember = ({ img, name, role, github, linkedin }: any) => (
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
    <p className='text-lg text-black mb-4'>{role}</p>
    <GitHubButton github={github} />
    <LinkedInButton linkedin={linkedin} />
  </div>
);
