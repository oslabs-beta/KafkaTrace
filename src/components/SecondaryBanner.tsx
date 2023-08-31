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
        <div className='flex flex-col md:flex-wrap md:flex-row min-[768px]:mx-8 min-[1152px]:mx-32 2xl:mx-48'>
            <div className='flex flex-col p-4 flex-[0_0_100%]'>
                <div className='font-akkurat font-medium text-black text-xl md:text-3xl'>Get Started</div>
                <div className='md:flex flex-wrap justify-center md:mb-4 px-4 md:p-4'>
                    <div className='flex flex-col flex-[0_0_40%] sm:mx-3'>
                        <p className='font-akkurat text-black my-4'>1. Install npm package</p>
                        <CodeSnippet code={npmCode}/>
                        <p className='font-akkurat text-black my-4'>2. Build and run the preconfigured containers</p>
                        <CodeSnippet code={composerCode}/>
                    </div>
                    <div className='flex flex-col flex-[0_0_40%] sm:mx-3'>
                        <p className='font-akkurat text-black my-4'>3. Add to each service file and replace [Service Name] as required</p>
                        <CodeSnippet code={tracerCode}/>
                        <p className='font-akkurat text-black mt-4 break-normal'>
                        4. Navigate to localhost port: 16686 for Jaeger, 9411 for Zipkin, 9090 for Prometheus or simply login to the website
                        </p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col p-4 flex-[0_0_100%]'>
                <h2 className='font-akkurat font-medium text-black text-xl md:text-3xl'>Demo</h2>
                <DemoGif />
            </div>
            <div className='flex flex-col px-4 md:px-16 max-h-48 md:max-h-96 flex-[0_0_100%] md:flex-[0_0_50%] order-1'>
                <Image
                src="/assets/jaeger-ui.png"
                alt='Jaeger UI'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className='rounded-lg'
                />
            </div>
            <div className='flex flex-col p-8 md:p-16 md:min-h-96 flex-[0_0_100%] md:flex-[0_0_50%] font-akkurat font-medium text-black text-xl md:text-3xl text-center italic m-auto order-2'>
                Pinpoint bottlenecks in your streaming pipelines to quickly troubleshoot issues that may arise.
            </div>
            <div className='flex flex-col p-8 md:p-16 md:min-h-96 flex-[0_0_100%] md:flex-[0_0_50%] font-akkurat font-medium text-black text-xl md:text-3xl text-center italic m-auto order-4 md:order-3'>
                Obtain visibility to impacts from your Apache Kafka Producer and Consumer Clients.
            </div>
            <div className='flex flex-col px-4 md:px-16 max-h-48 md:max-h-96 flex-[0_0_100%] md:flex-[0_0_50%] order-3 md:order-4'>
                <Image
                src="/assets/zipkin-ui.png"
                alt='Jaeger UI'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className='rounded-lg'
                />
            </div>
            <div className='flex flex-col px-4 md:px-16 max-h-48 md:max-h-96 flex-[0_0_100%] md:flex-[0_0_50%] order-5'>
                <Image
                src="/assets/prometheus-ui.png"
                alt='Jaeger UI'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className='rounded-lg'
                />
            </div>
            <div className='flex flex-col p-8 md:p-16 md:min-h-96 flex-[0_0_100%] md:flex-[0_0_50%] font-akkurat font-medium text-black text-xl md:text-3xl text-center italic m-auto order-6'>
                Choose from popular and established open source monitoring user interfaces.
            </div>
        </div>
    )
}