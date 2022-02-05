import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from './pages/forum/forum';
import SrcLibrary from './pages/forum/src-library/src-library';
import EngInst from './pages/forum/enginst/enginst';
import WorkArounds from './pages/forum/workarounds/workarounds';
import Checklist from './pages/checklist/index';
import { Header, HeaderName } from "carbon-components-react";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Header aria-label="IBM Platform Name">
            <HeaderName href="#" prefix="IBM">
            [Power Forum]
        </HeaderName>
        </Header>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/srcs" element={<SrcLibrary/>}/>
          <Route path="/workarounds" element={<WorkArounds/>}/>
          <Route path="/enginst" element={<EngInst/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path='/checklist' element={<Checklist/>}/>
        </Routes>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();