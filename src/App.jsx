import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Article from "./components/Article";
import CommentForm from "./components/CommentForm";
import { UserProvider } from "./contexts/User";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<CommentForm />}
          />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
