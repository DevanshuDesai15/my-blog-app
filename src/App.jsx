import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";
import Article from "./components/Article.jsx";
import NotFound from "./components/NotFound.jsx";
import NavBar from "./sub-components/NavBar.jsx";


function App() {

  return (
      <Router>
        <div className="font-sans text-base">
            <NavBar />
            <div className="pt-24 text-center mx-auto max-w-5xl">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/articles/:id" element={<Article />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
      </Router>
  )
}

export default App
