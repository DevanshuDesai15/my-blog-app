import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ArticlesList = ({ articles }) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            {articles.map((article, key) => (
                <Link to={`/articles/${article.name}`} key={key} className="w-full mb-4  hover:text-black">
                    <div className="m-2 p-4 border-b-4 border-gray-300 hover:bg-blue-300 hover:border-black text-left">
                        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-base">{article.content[0].substring(0, 150)}...</p>
                    </div>
                </Link>
            ))}
        </>
    )

}

export default ArticlesList;