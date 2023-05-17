import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionForm from './QuestionForm';
import { sendToVercelAnalytics } from './vitals';
import Disclaimer from './Disclamier';

ReactDOM.render(
  <React.StrictMode>
    <QuestionForm />
    <Disclaimer /> {/* Added footer component */}
  </React.StrictMode>,
  document.getElementById('root')
);

sendToVercelAnalytics();
