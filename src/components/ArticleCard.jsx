import { Link } from "react-router-dom"

function ArticleCard ({article}) {

    const capitalisedTopic = article.topic.charAt(0).toUpperCase() + article.topic.slice(1)

    return <li>
        <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} width="250px"/>
        <p>{capitalisedTopic} Votes: {article.votes}</p>
        </Link>
    </li>

}

export default ArticleCard