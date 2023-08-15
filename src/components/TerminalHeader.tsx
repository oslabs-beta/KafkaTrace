export default function TerminalHeader () {
    return (
    <div className='flex items-center justify-start p-2 text-black-400 space-x-1 border-b border-white-500 mb-2'>
      <span className='bg-red-600 w-3 h-3 rounded-full animate-bounce'></span>
      <span className='bg-yellow-500 w-3 h-3 rounded-full animate-bounce delay-150'></span>
      <span className='bg-green-600 w-3 h-3 rounded-full animate-bounce delay-300'></span>
    </div>
    )
}