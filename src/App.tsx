import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path="*" element={<h1>Nothing to see here</h1>} />
    </Routes>
      
  );
}

export default App;
