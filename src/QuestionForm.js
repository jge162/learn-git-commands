import React, { useState } from 'react';
import './QuestionForm.css';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const data = {
    'cherry pick <commit>': {
      definition: 'Apply a specific commit from another branch onto the current branch. Useful when you need to bring in a single commit without merging the entire branch.',
      practical_use: 'Incorporating a specific commit from a feature branch into the main branch without merging all the other changes.',
    },
    // Add the rest of your data here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const responseKey = Object.keys(data).find(key => key.startsWith(question));
      const response = responseKey ? data[responseKey] : { definition: 'Not Found', practical_use: 'Not Found' };
      setResponse(
        `<div><strong>Definition:</strong> ${response.definition}</div>
        <div><strong>Practical Use:</strong> ${response.practical_use}</div>`
      );
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while fetching the response.');
    }
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
      </form>
      <div className="response" dangerouslySetInnerHTML={{ __html: response }}></div>
    </div>
  );
};

export default QuestionForm;
