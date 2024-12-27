import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './App';
import Profile from './profile/Profile';
import Login from './pages/login/Login';
import Register from "./pages/register/Register"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Profile/> */}
    {/* <Login/> */}
{/* <Register/> */}
  </React.StrictMode>
);


