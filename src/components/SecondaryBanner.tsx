import CodeSnippet from '../components/CodeSnippet';
import DemoGif from '../components/DemoGif';
import Image from 'next/image';

const npmCode = 'npm install kafkatrace'

const composerCode = `import { composer } from 'kafkatrace';
composer();`

const tracerCode = `import { tracer } from 'kafkatrace';
tracer('[Service Name]');`

export default function SecondaryBanner () {
    return (
        <div className='flex flex-col md:flex-wrap md:flex-row md:mx-32 '>
            <div className='flex flex-col p-4 md:pl-16 flex-[0_0_100%] md:flex-[0_0_50%]'>
                <h2 className='font-akkurat font-medium text-black text-xl md:text-3xl'>Get Started</h2>
                <p className='font-akkurat text-black my-4'>1. Install npm package</p>
                <CodeSnippet code={npmCode}/>
                <p className='font-akkurat text-black my-4'>2. Docker compose up the preconfigured containers</p>
                <CodeSnippet code={composerCode}/>
                <p className='font-akkurat text-black my-4'>3. Add to each service and replace [Service Name] as required</p>
                <CodeSnippet code={tracerCode}/>
                <p className='font-akkurat text-black my-4'>
                4. Navigate to localhost port: 16686 for Jaeger, 9411 for Zipkin, 9090 for Prometheus or simply login to the website
                </p>
            </div>
            <div className='flex flex-col p-4 flex-[0_0_100%] md:flex-[0_0_50%]'>
                <h2 className='font-akkuratfont-medium text-black text-xl md:text-3xl mb-4'>Demo</h2>
                <DemoGif />
            </div>
            <div className='flex flex-col min-h-[10000] mt-4 p-4 flex-[0_0_100%] md:flex-[0_0_50%]'>
                    <Image
                    src="/../public/assets/jaeger-ui.png"
                    alt='Jaeger UI'
                    width={100}
                    height={100}
                    />
            </div>
        </div>
    )
}