import React from 'react';
import Navbar from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import InstallComponent from '../components/InstallComponent';
import CodeSnippet from '../components/CodeSnippet';
import DemoGif from '../components/DemoGif';
import Features from '../components/Features';
import Teams from '../components/Teams';

export default function Root() {
  return (
    <div className='m-0 min-h-screen'>
      <Navbar />
        <MainBanner />
        <InstallComponent />
        <CodeSnippet />
        <DemoGif />
        <Features />
        <Teams />
    </div>
  );
};