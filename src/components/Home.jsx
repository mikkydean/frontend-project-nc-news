import { useState } from "react";
import ArticlesList from "./ArticlesList";
import Sort from "./Sort";

function Home() {
  const [sortCriteria, setSortCriteria] = useState('created_at-desc')

  return (
    <>
      <Sort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/>
      <ArticlesList sortCriteria={sortCriteria}/>
    </>
  );
}

export default Home;
