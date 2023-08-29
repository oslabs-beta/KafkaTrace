import Image from 'next/image';
import gif from '../../public/assets/demo-vid.gif'

export default function DemoGif () {
    return (
        <div className='flex justify-center py-6'>
            <Image src={gif} alt='' className='rounded-lg w-96' />
        </div>
    )
};