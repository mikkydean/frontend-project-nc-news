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
    {/* <div>
      {topics.map((topic) => {
        const capitalisedTopic =
        topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)
        return <Link to={`/topics/${topic.slug}`} key={topic.slug}> | {capitalisedTopic} | </Link>
      })}
    </div> */}
    </>
  );
}

export default NavBar;
