import React, { useState } from 'react';
import './App.css';
import CodeInput from './components/CodeInput';
import CompileButton from './components/CompileButton';
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
      <header className="App-header">
        <h1>Web C++ Compiler</h1>
        <CodeInput code={code} setCode={setCode} />
        <div style={{ marginTop: '10px' }}>
          <CompileButton onSubmit={handleSubmit} />
        </div>
        <OutputDisplay output={output} />
      </header>
    </div>
  );
}

export default App;
