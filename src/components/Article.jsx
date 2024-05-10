import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, patchArticleVote } from "../api"
import Comments from "./Comments"
import ErrorComponent from "./ErrorComponent"

function Article () {
    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [myVote, setMyVote] = useState(0)
    const [isVotingError, setIsVotingError] = useState(false)
    const [isApiError, setIsApiError] = useState(null)
    const [voteText, setVoteText] = useState('vote')
    
    useEffect(() => {
        setIsApiError(false)
        getArticleById(article_id).then((response) => {
            setArticle(response.data.article)
            setIsLoading(false)
            response.data.article.votes === 1 || response.data.article.votes === -1 ? setVoteText('vote') : setVoteText('votes')
        }).catch((err) => {
            setIsApiError(err)
        })
    }, [])

    const handleVote = (vote) => {
        setMyVote(vote)
        article.votes + vote === 1 || article.votes + vote === -1 ? setVoteText('vote') : setVoteText('votes')
        setIsVotingError(false)
        patchArticleVote(article_id, vote)
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

    return <><article className="grid-container">
        <h2 className="title">{article.title}</h2>
        <img className='main-article-image' src={article.article_img_url}/>
        <div className="article-info">
        <p className="space-between"><span>{article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</span><span>{article.author}</span></p>
        <p className="space-between"><span>{article.created_at.slice(0,10)}</span> <span>{article.comment_count === 1 || article.comment_count === -1 ? <>{article.comment_count} comment</> : <>{article.comment_count} comments</>}</span></p>
        </div>  
        <div className="space-around votes">
        <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(-1)}>-1</button>
        <p className="vote-text"><span className="bold">{article.votes + myVote} {voteText}</span></p>
        <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(1)}>+1</button>
        </div>
        {isVotingError && <p className="error">An error occurred when voting. Please try again.</p>}  

        <p className="article-body">{article.body}</p>
    </article>
    <Comments />
    </>
}

export default Article