import ProfilePage from "./components/ProfilePage";
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
