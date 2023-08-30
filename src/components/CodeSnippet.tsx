import Image from "next/image";

const codeStyles: React.CSSProperties = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    overflowX: 'auto',
    minHeight: '75px'
};

interface CodeSnippetProps {
  code: string
}

export default function CodeSnippet ({code}: CodeSnippetProps) {

  return (
  <div className='border-2 p-1 md:p-3 max-w-[640px] shadow-inner rounded-lg bg-white e-105'>
    <div className="flex justify-between">
      <div className='flex items-center justify-start p-1 md:p-2 text-black-400 space-x-1 mb-2'>
        <span className='bg-red-600 w-3 h-3 rounded-full animate-bounce'></span>
        <span className='bg-yellow-500 w-3 h-3 rounded-full animate-bounce delay-150'></span>
        <span className='bg-green-600 w-3 h-3 rounded-full animate-bounce delay-300'></span>
      </div>
      <button onClick={() => navigator.clipboard.writeText(`${code}`)}>
        <Image
          src="/assets/clipboard.png"
          width={20}
          height={20}
          alt="Copy"
        />
      </button>
    </div>
    <pre style={codeStyles}>
        {code}
    </pre>
  </div>
  )
};