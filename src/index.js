import React from 'react';
import ReactDOM from 'react-dom';
import { sendToVercelAnalytics } from './vitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import Binary from './Pages/Binary';
import Navbar from './Pages/Navbar';
import QuestionForm from './Pages/QuestionForm';
import Disclaimer from './Pages/Disclaimer';
import './index.css';

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
