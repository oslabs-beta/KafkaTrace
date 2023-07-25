import React from 'react';
import Link from 'next/link';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { useState } from 'react'; // Import the useState hook

export default function Home() {
  return (
    <div className='min-h-screen font-family:"AkkuratPro-Regular",Arial,sans-serif bg-#fbfbfb text-#fbfbfb-100'>
      <Navbar />
      <main className='container mx-auto py-12'>
        <Hero />
        <InstallComponent />
        <CodeSnippet />
        <Features />
        {/* <Subscribe /> New section */}
        <Teams />
      </main>
      {/* <Footer /> */}
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

const codeStyles = {
  backgroundColor: 'white',
  color: 'black',
  padding: '16px',
  borderRadius: '8px',
  fontFamily: "'Courier New', Courier, monospace",
  overflowX: 'scroll',
  // Add other styles from the Prism theme as you see fit...
};

const Navbar = () => (
  <nav className='fixed top-0 w-full z-50 p-6 bg-#fbfbfb backdrop-saturate-200'>
    <div className='container mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-family:"AkkuratPro-Regular",Arial,sans-serif text-black transform hover:scale-105 transition-transform'>
        KafkaTrace
      </h1>
      <div className='space-x-4'>
        <LinkButton href='/'>Home</LinkButton>
        <LinkButton href='/about'>About</LinkButton>
        <LinkButton href='/docs'>Docs</LinkButton>
        <LinkButton href='/community'>Community</LinkButton>
        <LoginButton href='/login'>Login</LoginButton>
        <SignupButton href='/register'>Sign Up</SignupButton>
      </div>
    </div>
  </nav>
);

const LoginButton = ({ href, children }) => (
  <Link href={href}>
    <a
      className={`px-6 py-2 rounded-full border-2 border-black bg-gradient-to-r from-#fbfbfb-500 to-#fbfbfb-700 hover:from-#fbfbfb-400 hover:to-gray-600 text-black shadow-md transform transition hover:scale-105 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-#fbfbfb-600 ${commonStyling.button}`}>
      {children}
    </a>
  </Link>
);

const LinkButton = ({ href, children }) => (
  <Link href={href}>
    <a className='text-black hover:text-#fbfbfb-400 transition duration-200'>
      {children}
    </a>
  </Link>
);

const Hero = () => (
  <section className='relative text-center py-32 from-#fbfbfb to-#fbfbfb-500 text-black overflow-hidden'>
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
        <PrimaryButton href='/get-started'>Begin Journey</PrimaryButton>
      </div>
    </div>
  </section>
);

const PrimaryButton = ({ href, children }) => (
  <a
    href={href}
    className={`bg:#fbfbfb text-black px-8 py-3 rounded-lg shadow-md transform transition motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-#fbfbfb-500 inline-block ${commonStyling.button}`}>
    {children}
  </a>
);

const SignupButton = ({ href, children }) => (
  <Link href={href}>
    <a
      className={`px-6 py-2 rounded-full border-2 border-black bg-#fbfbfb hover:from-#fbfbfb-400 hover:to-#fbfbfb-600 text-black shadow-md transform transition hover:scale-105 motion-reduce:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white-600 ${commonStyling.button}`}>
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
      <pre className='p-4 bg-#fbfbfb text-black border-white-500 border-l-4 pl-4'>
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

const TerminalHeader = ({ className = '' }) => (
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
    <pre style={codeStyles}>
      <code className='language-javascript'>
        {`const kafka = require('kafkatrace');
        kafka.monitor({
          brokers: ['localhost:9092'],
              clientId: 'my-app',
              groupId: 'my-group',
            });
            kafka.on('data', (data) => {
              console.log(data);
            });`}
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
      {
        icon: '🌍',
        title: 'Global Support',
        description: 'A worldwide community always ready to help.',
      },
      {
        icon: '🔧',
        title: 'Feature-rich',
        description: 'From analysis to visualization, we have it all.',
      },
      {
        icon: '🎓',
        title: 'Excellent Docs',
        description: 'Guidance every step of the way.',
      },
    ].map((feature, index) => (
      <FeatureBlock key={index} {...feature} />
    ))}
  </section>
);

const FeatureBlock = ({ icon, title, description }) => (
  <div
    className={`p-8 rounded-lg shadow-md bg-#fbfbfb transition duration-300 ease-in-out transform hover:scale-105 ${commonStyling.button}`}>
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
            img: '/path-to-image-navdeep.jpg',
          },
          {
            name: 'Wai San Gu',
            role: 'Software Engineer',
            img: '/path-to-image-wai.jpg',
          },
          {
            name: 'Felix Chen',
            role: 'Software Engineer',
            img: '/path-to-image-felix.jpg',
          },
          {
            name: 'Alston Nguyen',
            role: 'Software Engineer',
            img: '/path-to-image-alson.jpg',
          },
        ].map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

// TeamMember component
const TeamMember = ({ img, name, role }) => (
  <div className='group flex flex-col items-center p-6 shadow-2xl bg-#fbfbfb transform transition-transform duration-300 ease-in-out hover:scale-105'>
    <div className='relative w-40 h-40 mb-8 overflow-hidden rounded-full group-hover:rotate-6 transition-transform duration-300 ease-in-out'>
      <img
        src={img}
        alt={`${name}, ${role}`}
        className='w-full h-full object-cover border-4 border-#fbfbfb-500 group-hover:rotate-[-6deg] transition-transform duration-300 shadow-lg'
      />
    </div>
    <h3 className='text-2xl font-bold mb-4 text-black'>{name}</h3>
    <p className='text-lg text-black'>{role}</p>
  </div>
);

// const Subscribe = () => (
//   <section className='py-16 px-8 md:px-16 bg-gradient overflow-hidden mb-16'>
//     <h2
//       className={`${commonStyling.sectionTitle} text-black font-extrabold text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-br from-#fbfbfb-500 to-#fbfbfb-600`}>
//       Stay Updated
//     </h2>
//     <p className={`${commonStyling.sectionSubtitle} text-gray-400 mb-6`}>
//       Subscribe to our newsletter for the latest updates and news.
//     </p>
//     <form className='mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
//       <input
//         type='email'
//         className='flex-grow p-3 bg-#fbfbfb-600 border-black focus:ring focus:ring-#fbfbfb-500 focus:shadow-xl placeholder-black transition duration-300 hover:bg-#fbfbfb-700'
//         placeholder='Enter your email'
//       />
//       <PrimaryButton className='transform hover:scale-105 transition-transform duration-300 shadow-xl self-center'>
//         Subscribe
//       </PrimaryButton>
//     </form>
//     <div className='mt-8'>
//       <GitHubButton />
//       <GmailButton />
//     </div>
//   </section>
// );

// const GitHubButton = () => (
//   <a
//     href='https://github.com/your-github-username'
//     target='_blank'
//     rel='noopener noreferrer'
//     className='btn inline-flex items-center bg-black hover:from-#fbfbfb-400 hover:to-#fbfbfb-600 text-white p-3 px-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out relative'>
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       className='h-5 w-5 mr-2'
//       viewBox='0 0 20 20'
//       fill='currentColor'>
//       <path
//         fillRule='evenodd'
//         d='M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0 1 10 4.8c.85.004 1.7.11 2.52.32 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.18.58.69.48A10.02 10.02 0 0 0 20 10c0-5.52-4.48-10-10-10z'
//         clipRule='evenodd'
//       />
//     </svg>
//     GitHub
//   </a>
// );

// const GmailButton = () => (
//   <a
//     href='mailto:your-email@example.com'
//     target='_blank'
//     rel='noopener noreferrer'
//     className='btn inline-flex items-center bg-red-600 hover:bg-red-500 text-black p-3 px-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out relative'>
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       className='h-5 w-5 mr-2'
//       viewBox='0 0 24 24'
//       fill='currentColor'>
//       <path d='M12 12.713L6.286 9l-1.2 1.986L12 16l6.914-5.014L17.714 9z'></path>
//       <path d='M18 4H6L0 11v2l6 5h12l6-5v-2l-6-7zm0 13l-6 4.675L6 17V10.6l6 4.675L18 10.675V17z'></path>
//     </svg>
//     Gmail
//   </a>
// );

// const Footer = () => (
//   <footer className='p-12 bg-black text-gray-400'>
//     <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
//       <div>
//         <h3 className='text-xl font-semibold mb-4'>KafkaTrace</h3>
//         <ul className='space-y-2'>
//           <FooterLink href='/about'>About Us</FooterLink>
//           <FooterLink href='/contact'>Contact</FooterLink>
//           <FooterLink href='/privacy'>Privacy Policy</FooterLink>
//           <FooterLink href='/terms'>Terms of Service</FooterLink>
//         </ul>
//       </div>
//       <div>
//         <h3 className='text-xl font-semibold mb-4'>Resources</h3>
//         <ul className='space-y-2'>
//           <FooterLink href='/docs'>Documentation</FooterLink>
//           <FooterLink href='/blog'>Blog</FooterLink>
//           <FooterLink href='/community'>Community</FooterLink>
//         </ul>
//       </div>
//       <div>
//         <h3 className='text-xl font-semibold mb-4'>Support</h3>
//         <ul className='space-y-2'>
//           <FooterLink href='/faq'>FAQ</FooterLink>
//           <FooterLink href='/support'>Support Center</FooterLink>
//           <FooterLink href='/feedback'>Feedback</FooterLink>
//         </ul>
//       </div>
//       <div className='flex flex-col items-center md:items-end'>
//         <h3 className='text-xl font-semibold mb-4'>Stay Connected</h3>
//         <div className='flex space-x-4'>
//           {/* Icons can be changed based on your preference */}
//           <a
//             href='#'
//             className='text-gray-400 hover:text-black transition duration-200'>
//             🐦
//           </a>
//           <a
//             href='#'
//             className='text-gray-400 hover:text-black transition duration-200'>
//             📘
//           </a>
//           <a
//             href='#'
//             className='text-gray-400 hover:text-black transition duration-200'>
//             📸
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className='mt-8  fs-t border-gray-700 pt-8 text-center'>
//       <p>© 2023 KafkaTrace. All rights reserved.</p>
//     </div>
//   </footer>
// );

// const FooterLink = ({ href, children }) => (
//   <li>
//     <Link href={href}>
//       <a className='text-gray-400 hover:text-gray-300 transition duration-200'>
//         {children}
//       </a>
//     </Link>
//   </li>
// );
