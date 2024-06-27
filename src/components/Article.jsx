import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import articles from "../sub-components/ArticleContent.jsx";
import axios from "axios";
import NotFound from "./NotFound.jsx";

const Article = () => {
    const { _id } = useParams();

    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/articles/${_id}`)
            .then((response) => {
                setArticle(response.data);
                // console.log(response.data);
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
            {/* {article.content.map((paragraph, key) => (
                <p className="text-base mb-2 text-left" key={key}>{paragraph}</p>
            ))} */}
            <p className="text-base mb-2 text-left">{article.content}</p>
        </div>
    );
}

export default Article;