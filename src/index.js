import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

function Main(props) {
  // Wrap the entire App in Router component allows for components to return Route components
  return (
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
