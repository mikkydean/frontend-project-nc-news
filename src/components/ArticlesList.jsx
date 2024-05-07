import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

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
