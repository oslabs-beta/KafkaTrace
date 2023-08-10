import { useState } from 'react';

export default function InstallComponent () {
    const [copied, setCopied] = useState(false); // State to track if copied to clipboard
  
    const handleCopy = () => {
      navigator.clipboard.writeText('npm install kafkatrace');
      setCopied(true); // Set copied to true when the button is clicked
      // Reset the copied state to false after a delay of 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };
  
    return (
      <div className='flex max-w-lg m-4 md:m-auto p-2 shadow-inner rounded-lg bg-white e-105 border-2'>
        <div className='flex basis-3/4'>
          <pre className='flex-1 p-4 mr-2 bg-gray-800 text-white border-neutral-500 rounded-lg'>
            <code className='language-javascript'>npm install kafkatrace</code>
          </pre>
        </div>
        <button
        onClick={handleCopy}
        className='flex basis-1/4 items-center justify-center rounded-xl shadow-none border-2 md:mt-0 md:ml-4 bg-[#fbfbfb]'>
            <span className='md:m-auto font-akkurat text-[#575657]'>
                {copied ? 'Copied to clipboard' : 'Copy'}
            </span>
        </button>
      </div>
    );
};