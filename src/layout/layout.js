const Layout = (props) => {
  return (
    <div className='layout min-h-screen flex flex-col bg-gradient-to-r from-secondary to-accent text-base-content'>
      <header className='text-white p-4 text-center shadow-md'>
        <h1 className='text-2xl font-semibold'>KafkaTrace</h1>
      </header>

      <main className='flex-grow container mx-auto p-4 space-y-4'>
        {props.children}
      </main>

      <footer className='text-white p-4 text-center shadow-md'>
        <p className='text-lg'>© {new Date().getFullYear()} KafkaTrace</p>
      </footer>
    </div>
  );
};

export default Layout;
