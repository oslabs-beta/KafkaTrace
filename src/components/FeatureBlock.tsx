interface FeatureBlockProps {
  icon: any;
  title: string;
  description: string;
}
  
export default function FeatureBlock ({ icon, title, description }: FeatureBlockProps) {
  return (
    <div className='font-akkurat text-black p-8 md:border-2 shadow-none transition duration-300 ease-in-out transform md:hover:scale-105'>
      <div className='text-6xl mb-8'>{icon}</div>
      <h3 className='text-3xl mb-6 font-medium'>{title}</h3>
      <p className='text-lg'>{description}</p>
    </div>
  )
}