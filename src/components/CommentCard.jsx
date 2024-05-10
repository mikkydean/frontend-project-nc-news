import { useContext, useEffect, useState } from "react"
import CardStyling from "./CardStyling"
import { deleteComment, patchCommentVote } from "../api"
import { UserContext } from "../contexts/User"

function CommentCard ({comment}) {
    const [isAuthor, setIsAuthor] = useState(false)
    const [isBeingDeleted, setIsBeingDeleted] = useState(false)
    const [hasBeenDeleted, setHasBeenDeleted] = useState(false)
    const [isError, setIsError] = useState(false)
    const {currentUser, isLoggedIn} = useContext(UserContext)
    const [isVotingError, setIsVotingError] = useState(false)
    const [myVote, setMyVote] = useState(0)
    const [voteText, setVoteText] = useState('vote')


useEffect (() => {
if (comment.author === currentUser) {
    setIsAuthor(true)
}
})

useEffect (() => {
    comment.votes === 1 || comment.votes === -1 ? setVoteText('vote') : setVoteText('votes')
}, [])

const handleClick = (e) => {
    e.preventDefault();
    setIsError(false)
    setIsBeingDeleted(true)
    deleteComment(comment.comment_id)
    .then(() => {
        setIsBeingDeleted(false)
        setHasBeenDeleted(true)
    })
    .catch((err) => {
    setIsError(true)
    })
}

const handleVote = (vote) => {
    setMyVote(vote)
    comment.votes + vote === 1 || comment.votes + vote === -1 ? setVoteText('vote') : setVoteText('votes')
    setIsVotingError(false)
    patchCommentVote(comment.comment_id, vote)
    .catch((err) => {
        setIsVotingError(true)
    })
    }



    return <CardStyling> <li>
        <div className="space-around votes padding-top">
            <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(-1)}>-1</button>
            <p className="vote-text"><span className="bold">{comment.votes + myVote} {voteText}</span></p>
            <button className="vote-button" disabled={myVote === -1 || myVote === 1} onClick={() => handleVote(1)}>+1</button>
        </div>
        {isVotingError && <p className="error">An error occurred when voting. Please try again.</p>}  
        <p className="text-body">{comment.body}</p>
        <p className="space-between"><span>{comment.author}</span><span>{comment.created_at.slice(0,10)}</span></p>
        {isAuthor && isLoggedIn && <button disabled={hasBeenDeleted} className="delete-button margin-top" onClick={handleClick}>Delete comment</button>}
        {isBeingDeleted && <p>Deleting comment...</p>}
        {hasBeenDeleted && <p className="success">Comment deleted successfully.</p>}
        {isError && <p className="error">Error when deleting comment. Please try again.</p>}
    </li>
    </CardStyling>
}

export default CommentCard