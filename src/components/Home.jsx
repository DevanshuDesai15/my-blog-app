import articles from "../sub-components/ArticleContent.jsx";
import ArticlesList from "../sub-components/ArticlesList.jsx";

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
            <p className="text-lg text-amber-100 mb-8">Brief introduction about your blog and what makes it unique.</p>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
                <ArticlesList articles={articles.slice(0, 1)} />
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <ul className="flex space-x-4">
                    <li className="bg-blue-500 text-white px-4 py-2 rounded">Sports</li>
                    <li className="bg-blue-500 text-white px-4 py-2 rounded">Politics</li>
                    <li className="bg-blue-500 text-white px-4 py-2 rounded">Technology</li>
                    <li className="bg-blue-500 text-white px-4 py-2 rounded">Entertainment</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-amber-100 mb-4">Sign up to receive updates on new articles and announcements.</p>
                <form className="flex">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-r px-4 py-2"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;