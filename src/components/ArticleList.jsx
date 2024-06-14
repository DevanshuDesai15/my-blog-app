import ArticlesList from "../sub-components/ArticlesList.jsx";
import articles from "../sub-components/ArticleContent.jsx";

const ArticleList = () => {
    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-bold mb-4 w-full text-center">Articles</h1>
            <ArticlesList articles={articles} />
        </div>
    );
}

export default ArticleList;