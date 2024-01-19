import React, { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export   interface userInf {
  email: string;
  family_name: string;
  given_name: string;
  granted_scopes: string;
  id: Text;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export const App = () => {
  const [user, setUser] = useState<userInf | undefined>(undefined);

  const updateUser = (newValue: userInf): void => {
    setUser (newValue)
  };
  return (
    <Routes>
      <Route index element={<Login updateUser={updateUser} />} />
      <Route path='/dashboard' element={<Dashboard user={user}/>}></Route>
      <Route path="*" element={<h1>Nothing to see here</h1>} />
    </Routes>
  );
};

