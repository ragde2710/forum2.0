import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Header, HeaderName } from 'carbon-components-react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SrcLibrary from './pages/src-library';
import EngInst from './pages/enginst';
import WorkArounds from './pages/workarounds'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header aria-label="IBM Platform Name">
        <HeaderName href="/" prefix="IBM">
          [Power Forum]
        </HeaderName>
      </Header>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/SRCs" element={<SrcLibrary/>}/>
          <Route path="/WorkArounds" element={<WorkArounds/>}/>
          <Route path="/EngInst" element={<EngInst/>}/>
        </Routes>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();