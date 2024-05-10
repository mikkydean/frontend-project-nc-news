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
  const [currentPage, setCurrentPage] =useState(1)
  const [lastPage, setLastPage] = useState(false)

  const sortQuery = sortCriteria.split('-')[0]
  const sortOrder = sortCriteria.split('-')[1]

  const setSortOrder = (sortQuery, sortOrder) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('topic', selectedTopic)
    newParams.set('sort_by', sortQuery)
    newParams.set('order', sortOrder)
    newParams.set('p', currentPage)
    setSearchParams(newParams)
  }

  useEffect(() => {
    setIsApiError(false)
    setSortOrder(sortQuery, sortOrder)
    getArticles({params: {
      sort_by: sortQuery,
      order: sortOrder,
      topic: selectedTopic,
      p: currentPage
  }}).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false)
      setLastPage(Math.ceil(response.data.total_count/10))
    })
    .catch((err) => {
      setIsApiError(err)
    });
  }, [sortCriteria, selectedTopic, currentPage]);

  console.log(lastPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTopic, sortOrder])

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
      <div className="space-between margin-bottom flex-grow">
        <button disabled={currentPage===1} onClick={()=>{setCurrentPage(currentPage-1)}}>Previous page</button>
        <button disabled={lastPage === currentPage}onClick={()=>{setCurrentPage(currentPage+1)}}>Next page</button>
      </div>
    </>
  );
}

export default ArticlesList;
