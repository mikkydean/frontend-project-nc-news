import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Article from "./components/Article";
import CommentForm from "./components/CommentForm";

function App() {

  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/:article_id/comments" element={<CommentForm/>} />
      </Routes>
    </>
  );
}

export default App;
