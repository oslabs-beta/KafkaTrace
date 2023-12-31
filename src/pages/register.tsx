import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../server/lib/validate';
import { useRouter } from 'next/router';

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values: {username: string; email: string; password: string; cpassword: string}) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    await fetch('/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push('/');
      });
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className='p-12 mx-15 rounded-lg text-center space-y-6 bg-#fbfbfb w-full md:full'>
        <div className='mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-2 text-black'>Register</h2>
          <p className='text-lg text-black mb-5'>
            We need a little information to register you!
          </p>
        </div>

        {/* form */}
        <form
          className='mt-8 max-w-md mx-auto space-y-8'
          onSubmit={formik.handleSubmit}>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='username' className='sr-only'>
                Username
              </label>
              <input
                type='text'
                id='username'
                placeholder='Username'
                className={`input input-black w-full ${
                  formik.errors.username && formik.touched.username
                    ? 'border-red-500'
                    : ''
                }
                p-4 my-1 w-full text-black tracking-tight placeholder-gray outline-none border-gray-400 rounded-lg focus:border-primary transition duration-200`}
                {...formik.getFieldProps('username')}
              />
            </div>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                className={`input input-black w-full ${
                  formik.errors.email && formik.touched.email
                    ? 'border-red-500'
                    : ''
                }
                p-4 my-1 w-full text-black tracking-tight bg-transparent placeholder-gray outline-none border-gray-400 rounded-lg focus:border-primary transition duration-200`}
                {...formik.getFieldProps('email')}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                type={`${show.password ? 'text' : 'password'}`}
                id='password'
                placeholder='Password'
                className={`input input-primary w-full ${
                  formik.errors.password && formik.touched.password
                    ? 'border-red-500'
                    : ''
                }
                p-4 my-1 w-full text-black tracking-tight bg-transparent placeholder-gray outline-none border-gray-400 rounded-lg focus:border-primary transition duration-200`}
                {...formik.getFieldProps('password')}
              />
            </div>
            <div>
              <label htmlFor='cpassword' className='sr-only'>
                Confirm Password
              </label>
              <input
                type={`${show.cpassword ? 'text' : 'password'}`}
                id='cpassword'
                placeholder='Confirm Password'
                className={`input input-primary w-full ${
                  formik.errors.cpassword && formik.touched.cpassword
                    ? 'border-red-500'
                    : ''
                }
                p-4 my-1 w-full text-black tracking-tight bg-transparent placeholder-gray outline-none border-gray-400 rounded-lg focus:border-primary transition duration-200`}
                {...formik.getFieldProps('cpassword')}
              />
            </div>
          </div>

          {/* login buttons */}
          <div className='mt-6'>
            <button
              type='submit'
              className='btn btn-primary btn-active w-full font-bold mb-2 text-black hover:bg-gray-700 bg-#fbfbfb'>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-sm text-black mt-5'>
          Have an account?{' '}
          <Link href={'/login'}>
            <a className='text-blue-400 hover:underline'>Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
