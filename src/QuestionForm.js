import React, { useState } from 'react';
import gitCommands from './gitCommands.json';
import './QuestionForm.css';
import Footer from './Footer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const commandOptions = Object.keys(gitCommands);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const responseKey = Object.keys(gitCommands).find((key) => key.startsWith(question));
      let response = { definition: 'Not Found', practical_use: 'Not Found', example: '' };

      if (responseKey) {
        const command = gitCommands[responseKey];
        let content = '';

        if (command.options) {
          content = Object.keys(command.options).map((optionKey) => (
            `<div><strong>${optionKey}:</strong> ${command.options[optionKey].definition}</div>
            <div><strong>Practical Use:</strong> ${command.options[optionKey].practical_use}</div>
            <div class="example-text"><strong>Example:</strong> ${command.options[optionKey].example}</div>
            <br>`
          ));
        } else {
          content = `<div><strong>Definition:</strong> ${command.definition}</div>
          <div><strong>Practical Use:</strong> ${command.practical_use}</div>
          <div class="example-text"><strong>Example:</strong> ${command.example}</div>`;
        }

        response = content;
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
      <img src="/git-icon.png" alt="Git Icon" className="git-icon" />
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
    <div className="button-container">
        <button className="submit-button" type="submit" disabled={!question}>
            Query
        </button>
        <button className="reset-button" onClick={handleReset}>
            Reset
        </button>
    </div>
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
  );
};

export default QuestionForm;
