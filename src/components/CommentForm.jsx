import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import { UserContext } from "../contexts/User";

function CommentForm({ setComments, comments }) {
  const [commentBody, setCommentBody] = useState("");
  const { article_id } = useParams();
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isValidComment, setIsValidCOmment] = useState(true)
  const { currentUser} = useContext(UserContext)

  const handleBodyChange = (e) => {
    setCommentBody(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidCOmment(true)
    setIsSuccessful(false);
    if (commentBody.length === 0) {
        setIsValidCOmment(false)
        return
      }
    setIsError(false);
    setIsPosting(true);
    setCommentBody(e.target[0].value);
    const bodyForPosting = {
      article_id: article_id,
      username: currentUser,
      body: commentBody,
    };
    postComment(article_id, bodyForPosting)
      .then((response) => {
        const newComment = response.data.comment;
        setIsPosting(false);
        setComments([newComment, ...comments]);
        setCommentBody("");
        setIsSuccessful(true);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-text" className="bold">Enter a comment below:</label>
        <textarea
          id="comment-text"
          value={commentBody}
          onChange={handleBodyChange}
        ></textarea>
        <div className="right-align">
          <button type="submit" id="post-comment-button">
            Post comment
          </button>
        </div>
      </form>
      {isPosting && <p>Posting comment...</p>}
      {isError && <p className="error">An error occurred when posting. Please try again.</p>}
      {!isValidComment && <p className="error">Please enter a comment.</p>}
      {isSuccessful && <p className="success">Comment posted successfully</p>}
    </div>
  );
}

export default CommentForm;
