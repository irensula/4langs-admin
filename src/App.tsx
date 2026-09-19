import { useState } from 'react';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import type { Section } from './types/section';

function App() {
  const [section, setSection] = useState<Section>('languages');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Login onLogin={() => setIsLoggedIn(true)} />
    )
  }

  return (
    <>
      <div>
        <Header />
        <Sidebar activeSection={section} onSectionChange={setSection} />
        <MainContent section={section} />
      </div>      
    </>
  )
}

export default App
