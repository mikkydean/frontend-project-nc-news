import { useState } from "react";
import ArticlesList from "./ArticlesList";
import Sort from "./Sort";
import TopicSelector from "./TopicSelector";

function Home() {
  const [sortCriteria, setSortCriteria] = useState('created_at-desc')
  const [selectedTopic, setSelectedTopic] = useState('')

  return (
    <>
    <div className="space-between selectors">
      <TopicSelector selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
      <Sort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/>
    </div>
      <ArticlesList sortCriteria={sortCriteria} selectedTopic={selectedTopic}/>
    </>
  );
}

export default Home;
