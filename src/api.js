import axios from "axios";

export const getAllArticles = () => {
  return axios.get("https://nc-news-7ch2.onrender.com/api/articles");
};

export const getArticleById = (article_id) => {
  return axios.get(
    `https://nc-news-7ch2.onrender.com/api/articles/${article_id}`
  );
};

export const getCommentsById = (article_id) => {
  return axios.get(
    `https://nc-news-7ch2.onrender.com/api/articles/${article_id}/comments`
  );
};

export const patchVote = (article_id, votes) => {
  return axios.patch(
    `https://nc-news-7ch2.onrender.com/api/articles/${article_id}`,
    { inc_votes: votes }
  );
};

export const postComment = (article_id, commentBody) => {
    return axios.post(`https://nc-news-7ch2.onrender.com/api/articles/${article_id}/comments`, commentBody)
}

export const deleteComment = (comment_id) => {
  return axios.delete(`https://nc-news-7ch2.onrender.com/api/comments/${comment_id}`)
}