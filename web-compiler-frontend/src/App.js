import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CodeInput from './components/CodeInput';
import OutputDisplay from './components/OutputDisplay';
import { compileCode } from './services/compileService';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await compileCode(code);
      setOutput(result.output);
    } catch (error) {
      setOutput('An error occurred during compilation - unable to connect with external compiler service.');
    }
  };

  return (
    <div className="App">
      <Navbar onCompile={handleSubmit} />
      <header className="App-header">
        <CodeInput code={code} setCode={setCode} />
        <OutputDisplay output={output} />
      </header>
    </div>
  );
}

export default App;
