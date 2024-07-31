import React from 'react';

const OutputDisplay = ({ output }) => (
  <div>
    <h2 style={{ textAlign: 'left' }}>Output:</h2>
    <pre className="output-pre">{output}</pre>
  </div>
);

export default OutputDisplay;
