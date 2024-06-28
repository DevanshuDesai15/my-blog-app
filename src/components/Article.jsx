import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import articles from "../sub-components/ArticleContent.jsx";
import axios from "axios";
import NotFound from "./NotFound.jsx";
import Comment from "../sub-components/Comment.jsx";

const Article = () => {
    const { _id } = useParams();

    const [article, setArticle] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${_id}`)
            .then((response) => {
                setArticle(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [_id]);

    if (!article) {
        return <NotFound />
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            {article.content && article.content.map((paragraph, key) => (
                <p key={key} className="text-base mb-2 text-left">{paragraph}</p>
            ))}
            <Comment />
        </div>
    );
}

export default Article;
