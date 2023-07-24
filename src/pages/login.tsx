import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import login_validate from '../server/lib/validate';

const Layout = ({ children }) => (
  <div className='layout min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-gray-100'>
    {/* Header */}
    <header className='flex items-center justify-between px-8 py-4 shadow-lg bg-opacity-90 backdrop-blur'>
      <h1 className='text-3xl font-semibold text-white'>KafkaTrace</h1>
      <nav className='space-x-4'>
        <Link href='/team'>
          <a className='hover:text-gray-300 transition duration-150'>Team</a>
        </Link>
        <Link href='/product'>
          <a className='hover:text-gray-300 transition duration-150'>Product</a>
        </Link>
        <Link href='/contact'>
          <a className='hover:text-gray-300 transition duration-150'>Contact</a>
        </Link>
      </nav>
    </header>

    {/* Main content */}
    <main className='flex-grow container mx-auto p-4 space-y-4 max-w-3xl'>
      {children}
    </main>

    {/* Footer */}
    <footer className='flex items-center justify-between px-8 py-4 shadow-lg bg-opacity-90 backdrop-blur'>
      <nav className='space-x-4'>
        <Link href='/contact-us'>
          <a className='hover:text-gray-300 transition duration-150'>
            Contact Us
          </a>
        </Link>
        <Link href='/about'>
          <a className='hover:text-gray-300 transition duration-150'>About</a>
        </Link>
        <Link href='/privacy'>
          <a className='hover:text-gray-300 transition duration-150'>
            Privacy Policy
          </a>
        </Link>
        <Link href='/terms'>
          <a className='hover:text-gray-300 transition duration-150'>
            Terms & Conditions
          </a>
        </Link>
      </nav>
      <p className='text-lg'>© {new Date().getFullYear()} KafkaTrace</p>
    </footer>
  </div>
);

const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    if (status.ok) router.push(status.url);
  };

  const handleProviderSignin = (provider) => {
    signIn(provider, { callbackUrl: 'http://localhost:3000/home' });
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className='p-6 m-10 rounded-lg shadow-lg text-center space-y-6 bg-gradient-to-r from-gray-700 to-teal-500'>
        <h1 className='text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-gray-700 to-teal-500 font-heading'>
          Login
        </h1>
        <p className='text-xl text-white mb-5 font-mono'>
          You're one step away from tracing!
        </p>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <InputGroup
            type='email'
            name='email'
            placeholder='Email'
            icon={<HiMail size={20} />}
            showError={formik.errors.email && formik.touched.email}
            {...formik.getFieldProps('email')}
            className='p-4 w-full text-gray-700 tracking-tight bg-transparent placeholder-primary outline-none border border-primary rounded-lg focus:border-indigo-500 transition duration-200'
          />
          <InputGroup
            type={show ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            icon={<HiLockClosed size={20} />}
            showError={formik.errors.password && formik.touched.password}
            {...formik.getFieldProps('password')}
            onClick={() => setShow(!show)}
            className='p-4 w-full text-primary tracking-tight bg-transparent placeholder-primary outline-none border border-primary rounded-lg focus:border-indigo-500 transition duration-200'
          />
          <button
            type='submit'
            className='btn btn-primary btn-active w-full font-bold mb-2 text-primary hover:bg-blue-700 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
            Login
          </button>
          <div className='flex justify-center space-x-4 mt-4'>
            <ProviderButton
              onClick={() => handleProviderSignin('google')}
              iconPath='/assets/google.svg'
              className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Sign In with Google
            </ProviderButton>

            <ProviderButton
              onClick={() => handleProviderSignin('github')}
              iconPath='/assets/github.svg'
              className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Sign In with Github
            </ProviderButton>
          </div>
        </form>
        <p className='text-sm text-primary mt-5'>
          Don't have an account yet?{' '}
          <Link href={'/register'}>
            <a className='text-primary hover:underline'>Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
};

const InputGroup = ({
  type,
  name,
  placeholder,
  showError,
  icon,
  onClick,
  ...props
}) => {
  return (
    <div className={`input-group ${showError ? 'border-red-500' : ''}`}>
      <span className='input-icon'>{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='input input-primary w-full'
        {...props}
      />
    </div>
  );
};

const ProviderButton = ({ onClick, iconPath, children, className }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${className} btn btn-primary btn-active w-half hover:bg-blue-700 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500s`}>
      <Image
        className='align-middle'
        src={iconPath}
        width='20'
        height={20}
        alt={`${children} logo`}
        bg='primary'
      />
      <span className='align-middle ml-2'>{children}</span>
    </button>
  );
};

export default Login;
