import { useState } from 'react';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
// import type { Section } from './types/types';

function App() {
  // const [section, setSection] = useState<Section>('languages');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Login onLogin={() => setIsLoggedIn(true)} />
    )
  }

  return (
    <>
      <div>
        <Sidebar />
      </div>      
    </>
  )
}

export default App
