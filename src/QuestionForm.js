import React, { useState } from 'react';
import gitCommands from './gitCommands.json'; // Import your JSON data here
import './QuestionForm.css';

const QuestionForm = () => {
  const [question, setQuestion] = useState('git ');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const responseKey = Object.keys(gitCommands).find(key => key.startsWith(question));
      const response = responseKey ? gitCommands[responseKey] : { definition: 'Not Found', practical_use: 'Not Found' };
      setResponse(
        `<div><strong>Definition:</strong> ${response.definition}</div>
        <div><strong>Practical Use:</strong> ${response.practical_use}</div>`
      );
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while fetching the response.');
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setQuestion('git ');
    setResponse('');
  };

  return (
    <div className="question-form">
      <h2 className="slide-down">Welcome, what git command interests you?</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className="question-input" 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
        />
        <button className="submit-button" type="submit">Ask</button>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </form>
      <div className="response" dangerouslySetInnerHTML={{ __html: response }}></div>
    </div>
  );
};

export default QuestionForm;
