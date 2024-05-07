function ArticleCard ({article}) {

    const capitalisedTopic = article.topic.charAt(0).toUpperCase() + article.topic.slice(1)

    return <li>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} width="250px"/>
        <p>{capitalisedTopic} Votes: {article.votes}</p>
    </li>

}

export default ArticleCard