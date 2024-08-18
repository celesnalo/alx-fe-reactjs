import React, { useState } from 'react';
import UserProfile from "./components/UserProfile";
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
