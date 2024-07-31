import React from 'react';
import './Navbar.css';
import CompileButton from './CompileButton';

const Navbar = ({ onCompile }) => {
  return (
    <div className="navbar">
      <h1>Web C++ Compiler</h1>
      <CompileButton onSubmit={onCompile} />
    </div>
  );
};

export default Navbar;
