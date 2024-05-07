import CardStyling from "./CardStyling"

function CommentCard ({comment}) {

    return <CardStyling> <li>
        <p className="text-body">{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Date: {comment.created_at.slice(0,10)}</p>
        <p>Votes: {comment.votes}</p>
    </li>
    </CardStyling>
}

export default CommentCard