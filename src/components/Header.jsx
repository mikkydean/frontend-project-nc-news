import { UserContext } from "../contexts/User";
import NavBar from "./NavBar";
import { useContext } from "react";

function Header() {
  const { isLoggedIn, currentUser, setCurrentUser } = useContext(UserContext) 


  const handleLogin = () => {
    setCurrentUser('tickle122')
  }

  const handleLogout = () => {
    setCurrentUser('')
  }

  return (
    <header>
    <div className="right-align"> 
    {isLoggedIn ? <button onClick={handleLogout}>Log out</button> : <button onClick={handleLogin}>Log in</button>}
    {isLoggedIn && <p>User: {currentUser}</p>}
    </div>
      <h1>NC News</h1>
      <NavBar />
      </header>
  );
}

export default Header;
