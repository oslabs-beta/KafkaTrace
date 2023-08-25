import React from 'react';
import Navbar from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import CodeSnippet from '../components/CodeSnippet';
import DemoGif from '../components/DemoGif';
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
        <div className='flex flex-col'>
          <h2>Get Started</h2>
          <p>1. Install npm package to your project</p>
          <CodeSnippet code={npmCode}/>
          <p>2.Docker compose up the preconfigurd containers</p>
          <CodeSnippet code={composerCode}/>
          <p>3.Add to each of your services and replace the service name as desired</p>
          <CodeSnippet code={tracerCode}/>

        </div>
        <DemoGif />
        <Features />
        <Teams />
    </div>
  );
};