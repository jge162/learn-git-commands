import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionForm from './QuestionForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import Binary from './Binary';
import Navbar from './Navbar';
import { sendToVercelAnalytics } from './vitals';
import Disclaimer from './Disclaimer';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Navbar /> {/* Added Navbar component */}
      <Routes>  {/* Change here */}
        <Route path="/" element={<QuestionForm />} /> {/* Change here */}
        <Route path="/binary" element={<Binary />} /> {/* Change here */}
      </Routes> {/* Change here */}
      <Disclaimer />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

sendToVercelAnalytics();
