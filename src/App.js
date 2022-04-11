import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
