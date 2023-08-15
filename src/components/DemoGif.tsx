import Image from 'next/image';
import gif from '../../public/assets/demo-vid.gif'

export default function DemoGif () {
    return (
        <div className='flex justify-center'>
            <Image src={gif} alt='' className='scale-90 rounded-lg p-0' />
        </div>
    )
};