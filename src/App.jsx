import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Article from "./components/Article";
import { UserProvider } from "./contexts/User";
import ErrorPage from "./components/ErrorPage";
import User from "./components/User";

function App() {


  
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="*" element={<ErrorPage />}/>
          <Route path="/users/:username" element={<User />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
