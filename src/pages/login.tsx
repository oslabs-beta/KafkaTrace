import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import login_validate from '../server/lib/validate';
import Layout from '../layout/layout';
import InputGroup from '../components/InputGroup';
import ProviderButton from '../components/ProviderButton';


export default function Login () {
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
    signIn(provider, { callbackUrl: '/home' });
  };

  return (
    <Layout>
      <div className='flex justify-center items-center'>
        <title>Login</title>
        <section className='p-6 m-10 rounded-lg border text-center space-y-6'>
          <h1 className='text-4xl text-black font-bold mb-6 text-gradient font-heading'>
            Login
          </h1>
          <p className='text-xl mb-5 font-akkurat text-[#575657]'>
            You&apos;re one step away from tracing!
          </p>
          <form onSubmit={formik.handleSubmit} className='space-y-4'>
            {/* <InputGroup
              type='email'
              placeholder='Email'
              showError={formik.errors.email && formik.touched.email}
              {...formik.getFieldProps('email')}
              className='p-4 w-full text-black tracking-tight placeholder-gray outline-none border border-primary rounded-lg focus:border-indigo-500 transition duration-200'
            /> */}
            {/* <InputGroup
              type={show ? 'text' : 'password'}
              placeholder='Password'
              showError={formik.errors.password && formik.touched.password}
              {...formik.getFieldProps('password')}
              onClick={() => setShow(!show)}
              className='p-4 w-full text-black tracking-tight placeholder-gray outline-none border border-primary focus:border-indigo-500 transition duration-200'
            /> */}
            {/* <button
              type='submit'
              className='btn btn-primary btn-active w-full mb-2 hover:bg-gray-300'>
              Login
            </button> */}
            <div className='flex justify-center space-x-4 mt-4'>
              <ProviderButton
                onClick={() => handleProviderSignin('google')}
                iconPath='/assets/google.svg'
                className='shrink py-2 px-4 font-semibold shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                  <span className='invisible md:visible'>
                    Sign In with Google
                  </span>
              </ProviderButton>

              <ProviderButton
                onClick={() => handleProviderSignin('github')}
                iconPath='/assets/github.svg'
                className='shrink py-2 px-4 font-semibold shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
                <span className='invisible md:visible'>
                    Sign In with Github
                  </span>
              </ProviderButton>
            </div>
          </form>
          {/* <p className='text-sm text-black mt-5'>
            Don&apos;t have an account yet?{' '}
            <Link href={'/register'}>
              <a className='text-blue-400 hover:underline'>Sign Up</a>
            </Link>
          </p> */}
        </section>
      </div>
    </Layout>
  );
};
