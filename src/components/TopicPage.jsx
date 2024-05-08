import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";


function TopicPage () {
    const { slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsError(false)
        getArticles({
            params: {
              topic: slug,
            }}).then((response) => {
          setArticles(response.data.articles);
          setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
        });
      }, [slug]);


    if(isLoading) {
        return <h2>Loading...</h2>
    }


    return <>
    <h2>All articles about {slug}</h2>
    {isError && <p className="error">An error occurred when loading the page. Please try again.</p>}
    <ul>
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
      </ul>
    </>
}

export default TopicPage