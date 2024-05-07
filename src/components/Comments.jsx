import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../api";
import CommentCard from "./CommentCard";
import Expandable from "./Expandable";
import CardStyling from "./CardStyling";

function Comments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

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
