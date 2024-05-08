import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCommentsById } from "../api";
import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import CommentForm from "./CommentForm";
import { UserContext } from "../contexts/User"



function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useContext(UserContext)


  useEffect(() => {
    getCommentsById(article_id).then((response) => {
      setComments(response.data.comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (comments.length === 0) {
    return <p>No comments exist for this article.</p>;
  }

  return (
    <>
      {!isLoggedIn ? <p className="bold">Please log in to post a comment</p> : <CommentForm setComments={setComments} comments={comments}/>}
      <Expandable>
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </Expandable>
    </>
  );
}

export default Comments;
