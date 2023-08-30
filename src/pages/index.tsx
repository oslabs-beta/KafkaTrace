import React from 'react';
import Navbar from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import SecondaryBanner from '../components/SecondaryBanner';
import Features from '../components/Features';
import Teams from '../components/Teams';

export default function Root() {
  return (
    <div className='m-0 min-h-screen'>
      <Navbar />
      <MainBanner />
      <SecondaryBanner />
      <Features />
      <Teams />
    </div>
  );
};