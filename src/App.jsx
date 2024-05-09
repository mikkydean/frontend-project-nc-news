import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Article from "./components/Article";
import { UserProvider } from "./contexts/User";
import TopicPage from "./components/TopicPage";
import ErrorPage from "./components/ErrorPage";

function App() {


  
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics/:slug" element={<TopicPage />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
