import TerminalHeader from "./TerminalHeader";

const codeStyles: React.CSSProperties = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'scroll',
  };

export default function CodeSnippet () {
    return (
    <div className='border-2 p-4 max-w-lg m-4 md:mx-auto my-8 shadow-inner rounded-lg bg-white e-105'>
      <TerminalHeader />
      <pre style={codeStyles}>
        <code className='language-javascript'>
          {`
    // Import the following function and
    // run the preconfigured Docker containers
    import { composer } from 'kafkatrace';
    composer();
  
    // Import the following function into each
    // Kafka Client and run clients
    import { tracer } from 'kafkatrace';
    tracer('[Service Name]');
          `}
        </code>
      </pre>
    </div>
    )
};