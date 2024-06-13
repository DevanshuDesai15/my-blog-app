import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="border-b-4 border-amber-100 text-center fixed top-0 w-full">
            <ul className="list-none m-0 p-0">
                <li className="inline-block pt-6 pb-6">
                    <Link to="/"
                          className="no-underline text-white font-bold px-6 py-6 hover:bg-white hover:text-black">Home</Link>
                </li>
                <li className="inline-block pt-6 pb-6">
                    <Link to="/about"
                          className="no-underline text-white font-bold px-6 py-6 hover:bg-white hover:text-black">About</Link>
                </li>
                <li className="inline-block pt-6 pb-6">
                    <Link to="/articles"
                          className="no-underline text-white font-bold px-6 py-6 hover:bg-white hover:text-black">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;