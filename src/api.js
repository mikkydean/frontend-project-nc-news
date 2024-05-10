import axios from "axios";

export const getArticles = (params) => {
  return axios.get("https://nc-news-7ch2.onrender.com/api/articles/", params);
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

export const getTopics = () => {
  return axios.get("https://nc-news-7ch2.onrender.com/api/topics");
};

export const getUser = (username) => {
  return axios.get(`https://nc-news-7ch2.onrender.com/api/users/${username}`)
}

export const patchArticleVote = (article_id, votes) => {
  return axios.patch(
    `https://nc-news-7ch2.onrender.com/api/articles/${article_id}`,
    { inc_votes: votes }
  );
};

export const patchCommentVote = (comment_id, votes) => {
  return axios.patch(
    `https://nc-news-7ch2.onrender.com/api/comments/${comment_id}`,
    { inc_votes: votes }
  );
};

export const postComment = (article_id, commentBody) => {
  return axios.post(
    `https://nc-news-7ch2.onrender.com/api/articles/${article_id}/comments`,
    commentBody
  );
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://nc-news-7ch2.onrender.com/api/comments/${comment_id}`
  );
};
