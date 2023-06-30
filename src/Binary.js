import React, { useState, useEffect, useCallback } from 'react';
import './Binary.css';
import Footer from './Footer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Binary = () => {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('decimal');
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

 
  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setInputType(value);
  };

  const convertInput = useCallback(() => { // <-- wrap convertInput() in useCallback
    switch (inputType) {
      case 'decimal':
        setDecimal(input);
        setBinary(decimalToBinary(input));
        setHexadecimal(decimalToHexadecimal(input));
        break;
      case 'binary':
        setDecimal(binaryToDecimal(input));
        setBinary(input);
        setHexadecimal(decimalToHexadecimal(binaryToDecimal(input)));
        break;
      case 'hexadecimal':
        setDecimal(hexadecimalToDecimal(input));
        setBinary(decimalToBinary(hexadecimalToDecimal(input)));
        setHexadecimal(input);
        break;
      default:
        break;
    }
  }, [input, inputType]); // <-- input and inputType are dependencies of useCallback

  useEffect(() => {
    convertInput();
  }, [convertInput]);

  const decimalToBinary = (decimal) => {
    if (decimal === '') {
      return '';
    }

    let binary = '';
    let num = parseInt(decimal);

    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }

    return binary;
  };

  const decimalToHexadecimal = (decimal) => {
    if (decimal === '') {
      return '';
    }

    return parseInt(decimal).toString(16).toUpperCase();
  };

  const binaryToDecimal = (binary) => {
    if (binary === '') {
      return '';
    }

    return parseInt(binary, 2).toString();
  };

  const hexadecimalToDecimal = (hexadecimal) => {
    if (hexadecimal === '') {
      return '';
    }

    return parseInt(hexadecimal, 16).toString();
  };

  return (
    <div className="binary-container">
      <div className="content-wrapper">
        <img src="/git-icon.png" alt="Git Icon" className="git-icon" />
        <h1>Binary Converter</h1>
        <div>
          <label htmlFor="input">Enter a value: </label>
          <input type="text" id="input" className="question-input" value={input} onChange={handleChange} />
          <label htmlFor="input-type" className="input-type-label">Choose input type: </label>
          <select id="input-type" className="input-type-select" value={inputType} onChange={handleSelectChange}>
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="hexadecimal">Hexadecimal</option>
          </select>
        </div>
        {inputType !== 'decimal' && <p className="decimal-result">Decimal: {decimal}</p>}
        {inputType !== 'binary' && <p className="binary-result">Binary: {binary}</p>}
        {inputType !== 'hexadecimal' && <p className="hex-results">Hexadecimal: {hexadecimal}</p>}
        <Footer />
        <div className="icons">
          <a href="https://www.linkedin.com/in/jeremyescobar/" className="icon-container" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon" style={{ fontSize: 60 }} />
          </a>
          <a href="https://github.com/jge162" className="icon-container" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="icon" style={{ fontSize: 60 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Binary;
        
