import { Link } from "react-router-dom";
import CardStyling from "./CardStyling";

function ArticleCard({ article }) {
  const capitalisedTopic =
    article.topic.charAt(0).toUpperCase() + article.topic.slice(1);

  return (
    <CardStyling>
      <li>
        <Link to={`/articles/${article.article_id}`}>
          <h3>{article.title}</h3>
          <img src={article.article_img_url} width="250px" />
          <p className="space-between">
            <span>{capitalisedTopic}</span>
            <span>{article.votes === 1 || article.votes === -1 ? <>{article.votes} vote</> : <>{article.votes} votes</>}</span>
          </p>
          <p className="space-between">
            <span>{article.created_at.slice(0, 10)}</span>{" "}
            <span>{article.comment_count === 1 || article.comment_count === -1 ? <>{article.comment_count} comment</> : <>{article.comment_count} comments</>}</span>
          </p>
        </Link>
      </li>
    </CardStyling>
  );
}

export default ArticleCard;
