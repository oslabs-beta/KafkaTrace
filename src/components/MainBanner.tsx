export default function MainBanner () {
    return (
      <section className='bg-opacity-0 relative text-center py-32 text-white overflow-hidden'>
        <div className='transform transition-transform hover:text-decot'>
          <h2 className='md:text-5xl text-3xl font-akkurat font-bold mb-4 duration-700'>
            Welcome to KafkaTrace
          </h2>
          <p className='md:text-2xl text-lg font-akkurat mb-12'>
            Streamline Kafka monitoring for all applications.
          </p>
          <div className='transform transition-transform duration-700 hover:scale-110'>
            <a href='https://www.npmjs.com/package/kafkatrace' className='font-akkurat border-white border px-8 py-3 rounded-xl'>
              Begin Journey
            </a>
          </div>
        </div>
      </section>
    );
};