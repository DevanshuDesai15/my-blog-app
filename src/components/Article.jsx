import { useParams } from "react-router-dom";
import articles from "../sub-components/ArticleContent.jsx";
import NotFound from "./NotFound.jsx";

const Article = () => {
    const { id} = useParams();

    const article = articles.find(article => article.name === id);

    if(!article) {
        return <NotFound />
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p className="text-base mb-2 text-left" key={key}>{paragraph}</p>
            ))}
        </div>
    );
}

export default Article;