import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false)
    });
  }, []);

  if(isLoading) {
    return <h2>Loading...</h2>
}

  return (
    <>
      <h2>All articles</h2>
      <ul>
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
      </ul>
    </>
  );
}

export default ArticlesList;
