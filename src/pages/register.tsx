import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
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

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push('http://localhost:3000');
      });
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className='bg-gray-100 p-6 m-10 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-center space-y-6 bg-gradient-to-r from-dusk to-dusk2 w-half'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-2 text-primary'>Register</h2>
          <p className='text-lg text-primary mb-5'>
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
                className={`input input-primary w-full ${
                  formik.errors.username && formik.touched.username
                    ? 'border-red-500'
                    : ''
                }
                p-4 w-full text-primary tracking-tight bg-transparent placeholder-primary outline-none border border-primary rounded-lg focus:border-primary transition duration-200`}
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
                className={`input input-primary w-full ${
                  formik.errors.email && formik.touched.email
                    ? 'border-red-500'
                    : ''
                }
                p-4 w-full text-primary tracking-tight bg-transparent placeholder-primary outline-none border border-primary rounded-lg focus:border-primary transition duration-200`}
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
                p-4 w-full text-primary tracking-tight bg-transparent placeholder-primary outline-none border border-primary rounded-lg focus:border-primary transition duration-200`}
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
                p-4 w-full text-primary tracking-tight bg-transparent placeholder-primary outline-none border border-primary rounded-lg focus:border-primary transition duration-200`}
                {...formik.getFieldProps('cpassword')}
              />
            </div>
          </div>

          {/* login buttons */}
          <div className='mt-6'>
            <button
              type='submit'
              className='btn btn-primary btn-active w-full font-bold mb-2 text-primary hover:bg-blue-700 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className='text-sm text-primary mt-5'>
          Have an account?{' '}
          <Link href={'/login'}>
            <a className='text-primary hover:underline'>Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
