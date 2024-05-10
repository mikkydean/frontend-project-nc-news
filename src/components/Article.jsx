import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, patchVote } from "../api"
import Comments from "./Comments"
import ErrorComponent from "./ErrorComponent"

function Article () {
    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [myVote, setMyVote] = useState(0)
    const [isVotingError, setIsVotingError] = useState(false)
    const [isApiError, setIsApiError] = useState(null)
    
    useEffect(() => {
        setIsApiError(false)
        getArticleById(article_id).then((response) => {
            setArticle(response.data.article)
            setIsLoading(false)
        }).catch((err) => {
            setIsApiError(err)
        })
    }, [])

    const handleVote = (vote) => {
        setMyVote(vote)
        setIsVotingError(false)
        patchVote(article_id, vote)
        .catch((err) => {
            setIsVotingError(true)
        })
        }

if(isApiError) {
    return <ErrorComponent status={isApiError.response.request.status} message={isApiError.response.data.message}/>
}
else if(isLoading) {
    return <h2>Loading...</h2>
}

    return <><article>
        <h2>{article.title}</h2>
        <img className='main-article-image' src={article.article_img_url}/>
        <p  className="space-between"><span>{article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</span><span>{article.author}</span></p>
        <p className="space-between"><span>{article.created_at.slice(0,10)}</span> <span>Comments: {article.comment_count}</span></p>
        <div className="space-around border-bottom">
        <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(-1)}>-1</button>
        <p><span className="bold">Votes: {article.votes + myVote}</span></p>
        <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(1)}>+1</button>
        </div>
        {isVotingError && <p className="error">An error occurred when voting. Please try again.</p>}    
        <p className="border-bottom">{article.body}</p>
    </article>
    <Comments />
    </>
}

export default Article