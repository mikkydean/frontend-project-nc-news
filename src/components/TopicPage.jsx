import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ErrorComponent from "./ErrorComponent";


function TopicPage () {
    const { slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [isApiError, setIsApiError] = useState(false)

    useEffect(() => {
      setIsApiError(false)
        getArticles({
            params: {
              topic: slug,
            }}).then((response) => {
          setArticles(response.data.articles);
          setIsLoading(false)
        })
        .catch((err) => {
          setIsApiError(err)
        });
      }, [slug]);

    if (isApiError) {
        return <ErrorComponent status={isApiError.response.request.status} message={isApiError.response.data.message}/>
    }
    else if(isLoading) {
        return <h2>Loading...</h2>
    }


    return <>
    <h2>All articles about {slug}</h2>
    <ul>
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
      </ul>
    </>
}

export default TopicPage