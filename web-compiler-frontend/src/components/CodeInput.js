import React from 'react';

const CodeInput = ({ code, setCode }) => (
  <textarea
    value={code}
    onChange={(e) => setCode(e.target.value)}
    placeholder="Enter your C++ code here"
    rows="10"
    cols="50"
  />
);

export default CodeInput;
