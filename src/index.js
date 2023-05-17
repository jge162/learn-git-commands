import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionForm from './QuestionForm';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <QuestionForm />
  </React.StrictMode>,
  document.getElementById('root')
);

sendToVercelAnalytics();