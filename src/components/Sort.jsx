import { useEffect, useState } from "react";
import { getArticles } from "../api";

function Sort({ sortCriteria, setSortCriteria }) {

const handleChange = (e) => {
  setSortCriteria(e.target.value)
}

  return (
    <div >
      <label htmlFor="sort-order-selection">Sort by: </label>
      <select value={sortCriteria} onChange={handleChange} id="sort-order-selection">
        <option value="created_at-desc">Newest</option>
        <option value="created_at-asc">Oldest</option>
        <option value="votes-desc">Most votes</option>
        <option value="votes-asc">Fewest votes</option>
        <option value="comment_count-desc">Most comments</option>
        <option value="comment_count-asc">Fewest comments</option>
      </select>
    </div>
  );
}

export default Sort;
