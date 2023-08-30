import Image from 'next/image';
import gif from '../../public/assets/demo-vid.gif'

export default function DemoGif () {
    return (
        <div className='flex justify-center mb-6 md:mb-16'>
            <Image src={gif} alt='' className='rounded-lg scale-[95%]' />
        </div>
    )
};