import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

function ArticlesList({ sortCriteria, selectedTopic } ) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const [isApiError, setIsApiError] = useState(null)

  const sortQuery = sortCriteria.split('-')[0]
  const sortOrder = sortCriteria.split('-')[1]

  const setSortOrder = (sortQuery, sortOrder) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('sort_by', sortQuery)
    newParams.set('order', sortOrder)
    setSearchParams(newParams)
  }

  useEffect(() => {
    setIsApiError(false)
    setSortOrder(sortQuery, sortOrder)
    getArticles({params: {
      sort_by: sortQuery,
      order: sortOrder,
      topic: selectedTopic
  }}).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false)
    })
    .catch((err) => {
      setIsApiError(err)
    });
  }, [sortCriteria, selectedTopic]);

  if(isApiError) {
    return <ErrorComponent status={isApiError.response.request.status} message={isApiError.response.data.message}/>
}
else if(isLoading) {
    return <>
    <h2>Loading...</h2>
    <p>Note: On initial load, this may take up to one minute while the back end spins up.</p>
    </>
}

  return (
    <>
      {selectedTopic === "" ? <h2>All articles</h2> : <h2>Articles about {selectedTopic}</h2>}
      <ul className="card-layout">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
      </ul>
    </>
  );
}

export default ArticlesList;
