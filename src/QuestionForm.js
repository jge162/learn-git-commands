import React, { useState } from 'react';
import axios from 'axios';
import './QuestionForm.css';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/question', { question });
      setResponse(`Definition: ${data.definition}\nPractical Use: ${data.practical_use}`);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while fetching the response.');
    }
  };

  return (
    <div className="question-form">
      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button className="submit-button" type="submit">Ask</button>
      </form>
      <div className="response">{response}</div>
    </div>
  );
};

export default QuestionForm;
