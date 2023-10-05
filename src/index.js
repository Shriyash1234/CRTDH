import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './components/home'
import Industry from './components/industry'
import Facilities from './components/facilities';
import Research from './components/research';
import Contact_Us from './components/contact';
import WorkshopPost from './components/workshopPost';
import Center from './components/center';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Industry" element={<Industry />} />
        <Route index path="/Facilities" element={<Facilities />} />
        <Route index path="/Research" element={<Research />} />
        <Route index path="/:CenterCode" element={<Center />} />
        <Route index path="/workshopIITGn" element={<WorkshopPost />} />
        <Route index path="/Contact" element={<Contact_Us />} />
      </Routes>
    </HashRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
