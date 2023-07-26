import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { signIn, SignInResponse  } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import login_validate from '../server/lib/validate';

const Layout = ({ children }:any) => (
  <div className='layout min-h-screen flex flex-col bg-#fbfbfb text-black'>
    {/* Header */}
    <header className='flex items-center justify-between px-8 py-4 shadow-lg bg-opacity-90 backdrop-blur'>
    <Link href='/'><a className='text-3xl text-black'>KafkaTrace</a></Link>
      <nav className='space-x-4'>
      </nav>
    </header>

    {/* Main content */}
    <main className='flex-grow container mx-auto p-4 space-y-4 max-w-3xl'>
      {children}
    </main>

  </div>
);
const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const formik= useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit: (values: { email: string, password: string}) => handleSubmit(values),
  });

  const handleSubmit = async (values: {email: string; password: string}) => {
    const callbackUrl = new URL('/', window.location.origin);

    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: callbackUrl.toString(),
    });

    if (status?.ok) {
      router.push(status.url ?? '/'); // Provide a default value of '/' if status.url is null
    }
  };

  const handleProviderSignin = (provider: string) => {
    signIn(provider, { callbackUrl: 'http://localhost:3000/home' });
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='p-6 m-10 rounded-lg shadow-lg text-center space-y-6 bg-#fbfbfb'>
        <h1 className='text-4xl font-bold mb-6 text-gradient bg-#fbfbfb font-heading'>
          Login
        </h1>
        <p className='text-xl text-black mb-5 font-mono'>
          You&apos;re one step away from tracing!
        </p>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <InputGroup
            type='email'
            placeholder='Email'
            showError={formik.errors.email && formik.touched.email}
            {...formik.getFieldProps('email')}
            className='p-4 w-full text-black tracking-tight bg-#fbfbfb placeholder-gray outline-none border border-primary rounded-lg focus:border-indigo-500 transition duration-200'
          />
          <InputGroup
            type={show ? 'text' : 'password'}
            placeholder='Password'
            showError={formik.errors.password && formik.touched.password}
            {...formik.getFieldProps('password')}
            onClick={() => setShow(!show)}
            className='p-4 w-full text-black tracking-tight bg-#fbfbfb placeholder-gray outline-none border border-primary focus:border-indigo-500 transition duration-200'
          />
          <button
            type='submit'
            className='btn btn-primary btn-active w-full mb-2 text-black hover:bg-gray-700 bg-#fbfbfb'>
            Login
          </button>
          <div className='flex justify-center space-x-4 mt-4'>
            <ProviderButton
              onClick={() => handleProviderSignin('google')}
              iconPath='/assets/google.svg'
              className='py-2 px-4 bg-#fbfbfb text-black font-semibold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Sign In with Google
            </ProviderButton>

            <ProviderButton
              onClick={() => handleProviderSignin('github')}
              iconPath='/assets/github.svg'
              className='py-2 px-4 bg-#fbfbfb text-black font-semibold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
              Sign In with Github
            </ProviderButton>
          </div>
        </form>
        <p className='text-sm text-black mt-5'>
          Don&apos;t have an account yet?{' '}
          <Link href={'/register'}>
            <a className='text-black hover:underline'>Sign Up</a>
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
  showError?: boolean | undefined | string;
  icon?: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

const InputGroup: React.FC<InputGroupProps>  = ({
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

const ProviderButton: React.FC<ProviderButtonProps> = ({ onClick, iconPath, children, className }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${className} btn btn-primary btn-active w-half bg-#fbfbfb hover:to-gray-700`}>
      
      <div style={{ backgroundColor: '#fbfbfb', borderRadius: '50%', display: 'inline-block' }}>
      <Image
        className='align-middle'
        src={iconPath}
        width={20}
        height={20}
        alt={`${children} logo`}
      />
      </div>
      <span className='align-middle ml-2'>{children}</span>
    </button>
  );
};

export default Login;
