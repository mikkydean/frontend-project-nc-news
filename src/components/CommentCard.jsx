import { useContext, useEffect, useState } from "react"
import CardStyling from "./CardStyling"
import { deleteComment } from "../api"
import { UserContext } from "../contexts/User"

function CommentCard ({comment}) {
    const [isAuthor, setIsAuthor] = useState(false)
    const [isBeingDeleted, setIsBeingDeleted] = useState(false)
    const [hasBeenDeleted, setHasBeenDeleted] = useState(false)
    const [isError, setIsError] = useState(false)
    const {currentUser, isLoggedIn} = useContext(UserContext)


useEffect (() => {
if (comment.author === currentUser) {
    setIsAuthor(true)
}
})

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



    return <CardStyling> <li>
        <p className="text-body">{comment.body}</p>
        <p className="space-between"><span>{comment.author}</span><span>{comment.created_at.slice(0,10)}</span></p>
        <p className="space-between">{comment.votes === 1 || comment.votes === -1 ? <>{comment.votes} vote</> : <>{comment.votes} votes</>}</p>
        {isAuthor && isLoggedIn && <button disabled={hasBeenDeleted} className="delete-button" onClick={handleClick}>Delete comment</button>}
        {isBeingDeleted && <p>Deleting comment...</p>}
        {hasBeenDeleted && <p className="success">Comment deleted successfully.</p>}
        {isError && <p className="error">Error when deleting comment. Please try again.</p>}
    </li>
    </CardStyling>
}

export default CommentCard