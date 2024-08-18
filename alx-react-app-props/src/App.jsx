import React, { useState } from 'react';
import ProfilePage from "./components/ProfilePage";
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
