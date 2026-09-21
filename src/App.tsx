import { useState } from 'react';

import type { Section } from './types/section';
import adminService from './services/adminService';

import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

import './App.css';

function App() {
  const [section, setSection] = useState<Section>('languages');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return adminService.restoreSession() !== null;
  });

  const loginHandler = () => {
      setIsLoggedIn(true);
  };

  const logoutHandler = () => {
      adminService.logout();
      setIsLoggedIn(false);
  };

  return (
    <div className='container'>
      <Header onLogout={logoutHandler}/>
      <div className='main_container'>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <>
            <Sidebar activeSection={section} onSectionChange={setSection} />
            <MainContent section={section} /> 
          </>  
        )}
      </div>
    </div>      
  )
}

export default App
