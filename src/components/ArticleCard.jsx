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
            <p className="space-between"><span>{capitalisedTopic}</span> <span>Votes: {article.votes}</span></p>
            <p className="space-between"><span>{article.created_at.slice(0,10)}</span> <span>Comments: {article.comment_count}</span></p>
        </Link>
      </li>
    </CardStyling>
  );
}

export default ArticleCard;
