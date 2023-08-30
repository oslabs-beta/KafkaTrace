import React from 'react';
import Navbar from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import SecondaryBanner from '../components/SecondaryBanner';
import Features from '../components/Features';
import Teams from '../components/Teams';

const npmCode = 'npm install kafkatrace'

const composerCode = `import { composer } from 'kafkatrace';
composer();`

const tracerCode = `import { tracer } from 'kafkatrace';
tracer('[Service Name]');`

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