import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../api"
import Comments from "./Comments"

function Article () {
    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.data.article)
            setIsLoading(false)
        })
    }, [])

if(isLoading) {
    return <h2>Loading...</h2>
}

    return <><article>
        <h2>{article.title}</h2>
        <img src={article.article_img_url}/>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Author: {article.author}</p>
        <p>Date: {article.created_at}</p>
        <p>{article.body}</p>
    </article>
    <Comments />
    </>
}

export default Article