import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';

import Layout from '../layout/layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import login_validate from '../../lib/validate';

import styles from '../../src/styles/Form.module.css';

// import '/daisyui/dist/full.css';

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
    signIn(provider, { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className={styles.form}>
        <div className={styles.title}>
          <h1>Welcome To Kafka Trace!</h1>
          <p className={styles.text_gray}>You're one step away from tracing!</p>
        </div>

        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <InputGroup
            type='email'
            name='email'
            placeholder='Email'
            icon={<HiAtSymbol size={25} />}
            showError={formik.errors.email && formik.touched.email}
            {...formik.getFieldProps('email')}
          />

          <InputGroup
            type={show ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            icon={<HiFingerPrint size={25} />}
            showError={formik.errors.password && formik.touched.password}
            {...formik.getFieldProps('password')}
            onClick={() => setShow(!show)}
          />

          <button type='submit' className={styles.button}>
            Login
          </button>

          <ProviderButton
            onClick={() => handleProviderSignin('google')}
            iconPath='/assets/google.svg'
            className={`${styles.button}`}
          >
            Sign In with Google
          </ProviderButton>

          <ProviderButton
            onClick={() => handleProviderSignin('github')}
            iconPath='/assets/github.svg'
            className={`${styles.button}`}
          >
            Sign In with Github
          </ProviderButton>
        </form>

        <p className={`text-center ${styles.text_gray}`}>
          Don't have an account yet?{' '}
          <Link href={'/register'}>
            <a className={styles.sign_up}>Sign Up</a>
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
    <div
      className={`${styles.input_group} ${showError ? 'border-rose-600' : ''}`}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input_text}
        {...props}
      />
      <span className='icon' onClick={onClick}>
        {icon}
      </span>
    </div>
  );
};

const ProviderButton = ({ onClick, iconPath, children, className }) => {
  return (
    <button type='button' onClick={onClick} className={className}>
      <Image
        className={styles.social_icon}
        src={iconPath}
        width='20'
        height={20}
        alt={`${children} logo`}
      ></Image>
      {children}
    </button>
  );
};

export default Login;
