import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUser } from "../api";

function User() {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser(currentUser).then((response) => {
      setUser(response.data.user);
    });
  }, [user, currentUser]);

  if (user) {
    return (
      <>
        <h2 className="margin-bottom">
          {user.name} ({user.username})
        </h2>
        <img src={user.avatar_url} />
      </>
    );
  } else {
    return <h2>You are not logged in...</h2>;
  }
}

export default User;
