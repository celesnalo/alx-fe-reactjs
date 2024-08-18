import React from 'react';
import { UserInfo } from './UserInfo';
import { UserContext } from '../UserContext';

function UserProfile() {
  const { userData } = React.useContext(UserContext);
  return <UserInfo userData={userData} />;
}

export default UserProfile;
