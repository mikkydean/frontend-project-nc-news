function CommentCard ({comment}) {

    return <li>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Date: {comment.created_at.slice(0,10)}</p>
        <p>Votes: {comment.votes}</p>
    </li>

}

export default CommentCard