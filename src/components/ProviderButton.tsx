import Image from 'next/image';

interface ProviderButtonProps {
    onClick: () => void;
    iconPath: string;
    children: React.ReactNode;
    className: string;
  }
  
export default function ProviderButton ({ onClick, iconPath, children, className }: ProviderButtonProps) {
    return (
      <button
        type='button'
        onClick={onClick}
        className={`${className} btn btn-primary btn-active w-half hover:to-gray-700`}>
        <div style={{ backgroundColor: '#fbfbfb', borderRadius: '50%', display: 'inline-block' }}>
            <Image
            className='flex justify-center items-center'
            src={iconPath}
            width={20}
            height={20}
            alt={`${children} logo`}
            />
        </div>
        <span className='align-middle ml-2'>{children}</span>
      </button>
    );
};