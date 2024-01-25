import React, { useState, ReactNode } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
interface ProtectedRouteProps {
  user: any;
  children?: ReactNode;
  redirectPath?: string;
}

export const App = () => {
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState<userInf | undefined>(storedUser ? JSON.parse(storedUser) : undefined);

  const updateUser = (newValue: userInf): void => {
    console.log("Updating user in App component:", newValue);
    setUser(newValue);

    // Persist user information in localStorage
    localStorage.setItem('user', JSON.stringify(newValue));
  }

  const signOut = () => {
    setUser(undefined);

    //remove session storage
    localStorage.removeItem('user');
  }
  
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children, redirectPath = '/' }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return children ? (children as JSX.Element) : <Outlet />;
  };

  return (
    <Routes>
      <Route index element={<Login updateUser={updateUser} />} />
      <Route element={<ProtectedRoute user={user} />}>
        <Route path='/dashboard' element={<Dashboard user={user} signOut={signOut}/>}></Route>
        <Route path="*" element={<h1>Nothing to see here</h1>} />
      </Route>
    </Routes>
  );
};

