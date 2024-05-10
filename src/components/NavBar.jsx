import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function NavBar() {
const [topics, setTopics] = useState([])

useEffect (() => {
  getTopics().then((response) => {
    setTopics(response.data.topics)
  })
}, [])



  return (
    <>
    <Link to="/" className="home-link">
      Home
    </Link>
    </>
  );
}

export default NavBar;
