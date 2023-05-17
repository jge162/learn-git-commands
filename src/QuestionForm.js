import React, { useState } from 'react';
import gitCommands from './gitCommands.json';
import './QuestionForm.css';
import Footer from './Footer'; // Import the Footer component

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const commandOptions = Object.keys(gitCommands);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const responseKey = Object.keys(gitCommands).find((key) => key.startsWith(question));
      let response = { definition: 'Not Found', practical_use: 'Not Found' };

      if (responseKey) {
        if (gitCommands[responseKey].options) {
          response = Object.keys(gitCommands[responseKey].options).map((optionKey) => (
            `<div><strong>${optionKey}:</strong> ${gitCommands[responseKey].options[optionKey].definition}</div>
            <div><strong>Practical Use:</strong> ${gitCommands[responseKey].options[optionKey].practical_use}</div>
            <br>`
          ));
        } else {
          response = `<div><strong>Definition:</strong> ${gitCommands[responseKey].definition}</div>
          <div><strong>Practical Use:</strong> ${gitCommands[responseKey].practical_use}</div>`;
        }
      }

      setResponse(response);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while fetching the response.');
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setQuestion('');
    setResponse('');
  };

  const handleSelectChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="question-form">
      <img src="/git-icon.png" alt="Git Icon" className="git-icon" /> {/* Add the image */}
      <h2 className="slide-down">Welcome, what git command interests you?</h2>
      <form onSubmit={handleSubmit}>
        <select className="question-select" value={question} onChange={handleSelectChange}>
          <option value="">Select a command</option>
          {commandOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="submit-button" type="submit" disabled={!question}>
          Query
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div className="response">
        {Array.isArray(response) ? (
          response.map((res, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: res }}></div>
          ))
        ) : (
          <div dangerouslySetInnerHTML={{ __html: response }}></div>
        )}
      </div>
      <Footer /> {/* Added footer component */}
    </div>
  );
};

export default QuestionForm;
