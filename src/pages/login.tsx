import { PropsWithChildren, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import login_validate from '../../lib/validate';

const Layout = (props: PropsWithChildren) => {
  return (
    <div className='layout min-h-screen flex flex-col bg-gradient-to-r from-secondary to-accent text-base-content'>
      <header className='flex items-center justify-between px-8 py-4 shadow-md'>
        <h1 className='text-2xl font-semibold text-fun'>KafkaTrace</h1>
        <nav className='space-x-4'>
          <Link href='/team'>
            <a className='text-fun text-primary hover:underline'>Team</a>
          </Link>
          <Link href='/product'>
            <a className='text-fun text-primary hover:underline'>Product</a>
          </Link>
          <Link href='/contact'>
            <a className='text-fun text-primary hover:underline'>Contact</a>
          </Link>
        </nav>
      </header>

      <main className='flex-grow container mx-auto p-4 space-y-4 max-w-3xl'>
        {props.children}
      </main>

      <footer className='flex items-center justify-between px-8 py-4 shadow-md'>
        <nav className='space-x-4'>
          <Link href='/contact-us'>
            <a className='text-fun hover:underline'>Contact Us</a>
          </Link>
          <Link href='/about'>
            <a className='text-fun hover:underline'>About</a>
          </Link>
          <Link href='/privacy'>
            <a className='text-fun hover:underline'>Privacy Policy</a>
          </Link>
          <Link href='/terms'>
            <a className='text-fun hover:underline'>Terms & Conditions</a>
          </Link>
        </nav>
        <p className='text-lg text-fun'>
          © {new Date().getFullYear()} KafkaTrace
        </p>
      </footer>
    </div>
  );
};

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

  const handleSubmit = async (values: {email: string; password: string}) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    if (status.ok) router.push(status.url);
  };

  const handleProviderSignin = (provider: string) => {
    signIn(provider, { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className='bg-gray-100 p-6 m-10 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-center space-y-6 bg-gradient-to-r from-dusk to-dusk2'>
        <h1 className='text-3xl font-bold mb-2 text-primary'>Login</h1>
        <p className='text-lg text-primary mb-5'>
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

interface InputGroupProps {
  type: string;
  name: string;
  placeholder: string;
  showError: boolean;
  icon: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

const InputGroup: React.FC<InputGroupProps> = ({
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

interface ProviderButtonProps {
  onClick: () => void;
  iconPath: string;
  children: React.ReactNode;
  className: string;
}

const ProviderButton: React.FC<ProviderButtonProps>= ({ onClick, iconPath, children, className }) => {
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
