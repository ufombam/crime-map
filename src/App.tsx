import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './components/Login/Login';



function App() {
  return (
    <Routes>
      <Route index element={<Nav />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="*" element={<h1>Nothing to see here</h1>} />
    </Routes>
      
  );
}

export default App;
