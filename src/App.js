import React from 'react';
import './App.scss';
import { Link } from "react-router-dom";
import { ArrowRight32 } from '@carbon/icons-react';

function App() {
  return (
    <div className='app'>
      <div className='landing-page-content'>

      <div className='box'>
            <Link to="/checklist">
            <div className='box-title'>
              <h1>Checklist</h1>
            </div>
            <div className='box-content'>
              <div className='context'>
                <p>
                  Web Tool for check correct FAB replacement
                  and validate quality specs.
                </p>
              </div>
              <div className='icon-container'>
                <ArrowRight32 className='box-content--icon'/>
              </div>
            </div>
            </Link>
          </div>

          <div className='box'>
            <a href='http://powertest.gdl.mex.ibm.com/users/login/?next=/'>
            <div className='box-title'>
              <h1>PTS</h1>
            </div>
            <div className='box-content'>
              <div className='context'>
                <p>Part tracking system.</p>
              </div>  
              <div className='icon-container'>
                <ArrowRight32 className='box-content--icon'/>
              </div>
            </div>
            </a>
          </div>

          <div className='box'>
            <Link to="/forum">
            <div className='box-title'>
              <h1>Forum</h1>
            </div>
            <div className='box-content'>
              <div className='context'>
                <p>
                  Forum where you will found information about
                  srcs and more documentation to help for debugging.
                </p>
              </div>
              <div className='icon-container'>
                <ArrowRight32 className='box-content--icon'/>
              </div>
            </div>
            </Link>
          </div>

        <div className='box'>
          <a href='https://certification-tool.dal1a.cirrus.ibm.com/#/login'>
            <div className='box-title'>
              <h1>Certification Tool</h1>
            </div>
            <div className='box-content'>
              <div className='context'>
                <p>Certification tool for workers.</p>
              </div>  
              <div className='icon-container'>
                <ArrowRight32 className='box-content--icon'/>
              </div>
            </div>
          </a>
        </div>

        <div className='box'>
         <a href='http://smweb.gdl.mex.ibm.com:9080/Smart_Web/login.jsp?id=3621&error=fail&redirect=SMDashboards.jsp'>
            <div className='box-title'>
              <h1>Smart Web</h1>
            </div>
            <div className='box-content'>
              <div className='context'>
                <p>
                  Smart Web Description.
                </p>
              </div>  
              <div className='icon-container'>
                <ArrowRight32 className='box-content--icon'/>
              </div>
            </div>
            </a>
        </div>

        <div className='box'>
          <Link to="/golden">
            <div className='box-title'>
              <h1>Golden Systems</h1>
            </div>
            <div className='box-content'>
              <div className='context'>
                <p>Inventary for Golden System and parts.</p>
              </div>  
              <div className='icon-container'>
                <ArrowRight32 className='box-content--icon'/>
              </div>
            </div> 
          </Link>
        </div>

      </div>
    </div>
  );
}

export default App;

