import React from 'react';
import './App.scss';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <div className='landing-page-content'>

          <div className='box'>
            <Link to="/checklist">
              <h1>Checklist</h1>
            </Link>
          </div>

          <div className='box'>
            <a href='http://powertest.gdl.mex.ibm.com/users/login/?next=/'>
              <h1>Part Tracking System</h1>
            </a>
          </div>

        <div className='box'>
          <Link to="/forum">
            <h1>Power Forum</h1>
          </Link>
        </div>

        <div className='box'>
          <a href='https://certification-tool.dal1a.cirrus.ibm.com/#/login'>
            <h1>Certification Tool</h1>
          </a>
        </div>

        <div className='box'>
          <a href='http://smweb.gdl.mex.ibm.com:9080/Smart_Web/login.jsp?id=3621&error=fail&redirect=SMDashboards.jsp'>
            <h1>Smart Web</h1>
            </a>
        </div>

        <div className='box'>
          <Link to="/golden">
            <h1>Golden Systems</h1>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default App;

