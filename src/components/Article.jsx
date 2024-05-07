import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, patchVote } from "../api"
import Comments from "./Comments"

function Article () {
    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [myVote, setMyVote] = useState(0)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response.data.article)
            setIsLoading(false)
        })
    }, [])

    const handleVote = (vote) => {
        setMyVote(vote)
        setIsError(false)
        patchVote(article_id, vote)
        .catch((err) => {
            setIsError(true)
        })
        }


if(isLoading) {
    return <h2>Loading...</h2>
}

    return <><article>
        <h2>{article.title}</h2>
        <img className='main-article-image' src={article.article_img_url}/>
        <p>Topic: {article.topic}</p>
        <p>Total votes: {article.votes + myVote}</p>
        <button onClick={() => handleVote(1)}>Upvote (+1)</button>
        <button onClick={() => handleVote(0)}>Cancel my vote</button>
        <button onClick={() => handleVote(-1)}>Downvote (-1)</button>
        {isError && <p className="error">An error occurred when voting. Please try again.</p>}
        <p>Author: {article.author}</p>
        <p>Date: {article.created_at.slice(0,10)}</p>
        <p>{article.body}</p>
    </article>
    <Comments />
    </>
}

export default Article