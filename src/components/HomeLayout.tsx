import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode,
    handleSignOut: any,
    setShowUI: any
  }

export default function Layout ({ children, handleSignOut, setShowUI }: LayoutProps) {
    return (
        <div className='layout min-h-screen flex bg-gradient-to-br from-gray-900 to-black text-gray-100'>
        <header className='flex justify-between fixed top-0 w-full z-50 p-1 px-8 bg-white'>
            <Link href='/'>
            <a>
                <Image
                    src="/assets/LogoWithText-Transparent.png"
                    width={135}
                    height={35}
                    alt="KafkaTrace"
                />
            </a>
            </Link>
            <nav className='flex space-x-4'>
            <button
                onClick={() => setShowUI('http://localhost:16686')}
                className='px-4 py-1 bg-blue-500 font-akkurat text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
                Jaeger UI
            </button>
            <button
                onClick={() => setShowUI('http://localhost:9411')}
                className='px-4 py-1 bg-blue-500 font-akkurat text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
                Zipkin UI
            </button>
            <button
                onClick={() => setShowUI('http://localhost:9090')}
                className='px-4 py-1 bg-blue-500 font-akkurat text-white rounded-lg shadow-md hover:bg-blue-600 border-2 border-blue-600 hover:scale-105 transition duration-200'>
                Prometheus
            </button>
            <button
                onClick={handleSignOut}
                className='px-4 py-1 bg-red-500 font-akkurat text-white rounded-lg shadow-md hover:bg-red-600 border-2 border-red-600 hover:scale-105 transition duration-200'>
                Sign Out
            </button>
            </nav>
        </header>
    
        <main className='flex-grow container mx-auto pt-24 space-y-4 max-w-3xl'>
            {children}
        </main>
        </div>

    )
};