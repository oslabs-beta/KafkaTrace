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
        <div className='flex flex-col md:flex-row md:mx-32 '>
          <div className='flex flex-col mb-4 md:pl-32 flex-[0_0_100%] md:flex-[0_0_50%]'>
            <h2 className='font-akkurat text-black text-3xl'>Get Started</h2>
            <p className='font-akkurat text-black my-4'>1. Install npm package to your project</p>
            <CodeSnippet code={npmCode}/>
            <p className='font-akkurat text-black my-4'>2.Docker compose up the preconfigured containers</p>
            <CodeSnippet code={composerCode}/>
            <p className='font-akkurat text-black my-4'>3.Add to each of your services and replace the service name as desired</p>
            <CodeSnippet code={tracerCode}/>
          </div>
          <div className='flex-col flex-[0_0_100%] md:flex-[0_0_50%]'>
            <h2 className='font-akkurat text-black text-3xl'>Demo</h2>
            <DemoGif />
          </div>

        </div>
        <Features />
        <Teams />
    </div>
  );
};