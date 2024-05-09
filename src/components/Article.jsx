import { useContext, useEffect, useState } from "react"
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
        <p  className="space-between"><span>Topic: {article.topic}</span><span>Author: {article.author}</span></p>
        <p className="space-between"><span>Date: {article.created_at.slice(0,10)}</span> <span>Comments: {article.comment_count}</span></p>
        <div className="space-around border-bottom">
        <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(-1)}>-1</button>
        <p>Total votes: <span className="bold">{article.votes + myVote}</span></p>
        <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(1)}>+1</button>
        </div>
        {isError && <p className="error">An error occurred when voting. Please try again.</p>}
        
        <p className="border-bottom">{article.body}</p>
    </article>
    <Comments />
    </>
}

export default Article