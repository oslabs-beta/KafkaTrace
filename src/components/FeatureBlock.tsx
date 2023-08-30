interface FeatureBlockProps {
  icon: any;
  title: string;
  description: string;
}
  
export default function FeatureBlock ({ icon, title, description }: FeatureBlockProps) {
  return (
    <div className='font-akkurat text-black p-6 md:p-8 md:border-2 shadow-none transition duration-300 ease-in-out transform md:hover:scale-105'>
      <div className='text-3xl md:text-5xl mb-2 md:mb-8'>{icon}</div>
      <h3 className='text-xl md:text-3xl mb-2 md:mb-6 font-medium'>{title}</h3>
      <p className='text-sm md:text-lg'>{description}</p>
    </div>
  )
}