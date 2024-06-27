import ArticlesList from "../sub-components/ArticlesList.jsx";
// import articles from "../sub-components/ArticleContent.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const ArticleList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/articles/list-articles")
            .then((response) => {
                // console.log(response.data);
                setArticles(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-bold mb-4 w-full text-center">Articles</h1>
            <ArticlesList articles={articles} />
        </div>
    );
}

export default ArticleList;