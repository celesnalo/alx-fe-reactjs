import { UserContext } from "../UserContext";

function UserInfo() {
  const {userData} = React.useContext(UserContext);

  return(
    <div>
      <p>
        Name: {userData.name}
      </p>
      <p>
        Email: {userData.email}
      </p>
    </div>
  );
}

export default UserInfo;