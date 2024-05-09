import { useEffect, useState } from "react";
import { getArticles } from "../api";

function Sort({ sortCriteria, setSortCriteria }) {

const handleChange = (e) => {
  setSortCriteria(e.target.value)
}

  return (
    <div className="right-align">
      <label htmlFor="sort-order-selection">Sort by: </label>
      <select value={sortCriteria} onChange={handleChange} id="sort-order-selection">
        <option value="created_at-desc">Date: Newest</option>
        <option value="created_at-asc">Date: Oldest</option>
        <option value="votes-desc">Votes: Most popular</option>
        <option value="votes-asc">Votes: Least popular</option>
        <option value="comment_count-desc">Comments: Most commented</option>
        <option value="comment_count-asc">Comments: Least commented</option>
      </select>
    </div>
  );
}

export default Sort;
