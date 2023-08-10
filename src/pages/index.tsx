import React from 'react';
import Image from 'next/image';
import gif from '../../public/assets/demo-vid.gif';
import Navbar from '../components/Navbar';
import ReactParticles from '../components/ReactParticles';
import MainBanner from '../components/MainBanner';
import InstallComponent from '../components/InstallComponent';

const commonStyling = {
  button:
    'px-8 py-3 rounded-none shadow-2xl',
  sectionTitle: 'text-4xl font-bold mb-6 text-black',
  sectionSubtitle: 'text-xl mb-8',
  professionalFont: 'font-mono',
  futuristicFont: 'font-heading',
};

const codeStyles: React.CSSProperties = {
  backgroundColor: '#1f2937',
  color: 'white',
  padding: '16px',
  borderRadius: '8px',
  overflowX: 'scroll',
};

export default function Root() {
  return (
    <div className='m-0 min-h-screen'>
      <Navbar />
      {/* <main className='mx-auto py-12'> */}
        {/* <ReactParticles /> */}
        <MainBanner />
        <InstallComponent />
        <CodeSnippet />
        <DemoGif />
        <Features />
        <Teams />
      {/* </main> */}
    </div>
  );
}


const CodeSnippet = () => (
  <div className='border-2 p-4 max-w-lg m-4 md:mx-auto my-8 shadow-inner rounded-lg bg-white e-105'>
    <TerminalHeader className='mb-2' />
    <pre style={codeStyles}>
      <code className='language-javascript'>
        {`
  // Import the following function and
  // run the preconfigured Docker containers
  import { composer } from 'kafkatrace';
  composer();

  // Import the following function into each
  // Kafka Client and run clients
  import { tracer } from 'kafkatrace';
  tracer('[Service Name]');
        `}
      </code>
    </pre>
  </div>
);

const TerminalHeader = ({ className = '' }: any) => (
  <div
    className={`flex items-center justify-start p-2 text-black-400 space-x-1 border-b border-white-500 ${className}`}>
    <span className='bg-red-600 w-3 h-3 rounded-full animate-bounce'></span>
    <span className='bg-yellow-500 w-3 h-3 rounded-full animate-bounce delay-150'></span>
    <span className='bg-green-600 w-3 h-3 rounded-full animate-bounce delay-300'></span>
  </div>
);

const DemoGif = () => (
  <div className='flex justify-center'>
    <Image src={gif} alt='' className='scale-90 rounded-lg p-0' />
  </div>
);

const Features = () => (
  <section className='md:py-16 md:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
    {[
      {
        icon: '⚡',
        title: 'Quick and Easy',
        description:
          'Quick to Install and Easy To Implement. Get Started Effortlessly',
      },
      {
        icon: '📦',
        title: 'All-In-One',
        description: 'Modern Dashboard to Display Kafka Client Instrumentation',
      },
      { 
        icon: '💻',
        title: 'Privately Hosted',
        description:
          'Integration With Your Local Directory After Sign In',
      },
    ].map((feature, index) => (
      <FeatureBlock key={index} {...feature} />
    ))}
  </section>
);

const FeatureBlock = ({ icon, title, description }: any) => (
  <div className='font-akkurat text-black p-8 md:border-2 shadow-none transition duration-300 ease-in-out transform md:hover:scale-105'>
    <div className='text-6xl mb-8'>{icon}</div>
    <h3 className='text-3xl mb-6 font-bold'>{title}</h3>
    <p className='text-lg'>{description}</p>
  </div>
);

const Teams = () => (
  <section className='py-16 text-gray-300'>
    <h2 className='font-akkurat text-black text-4xl mb-16 text-center md:text-left md:ml-36 font-black'>
      Meet the team
    </h2>
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {[
          {
            name: 'Navdeep Simmak',
            role: 'Software Engineer',
            img: '/assets/Navdeep.jpeg',
            github: 'https://github.com/NaviSimmak',
            linkedin: 'https://www.linkedin.com/in/navdeep-simmak/',
          },
          {
            name: 'Wai San Gu',
            role: 'Software Engineer',
            img: '/assets/Waisan.jpeg',
            github: 'https://github.com/waisangu',
            linkedin: 'https://www.linkedin.com/in/waisangu/',
          },
          {
            name: 'Felix Chen',
            role: 'Software Engineer',
            img: '/assets/Felix.jpeg',
            github: 'https://github.com/flexzchen',
            linkedin: 'https://www.linkedin.com/in/felixzchen/',
          },
          {
            name: 'Alston Nguyen',
            role: 'Software Engineer',
            img: '/assets/Alston.jpeg',
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
