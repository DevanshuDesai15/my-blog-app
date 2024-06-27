import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['border-b-4', 'text-center', 'fixed', 'top-0', 'w-full'];
    if (scrolled) {
        navbarClasses.push('bg-black');
    } else {
        navbarClasses.push('bg-transparent');
    }

    return (
        <nav className={navbarClasses.join(" ")}>
            <ul className="list-none m-0 p-0">
                <li className="inline-block pt-6 pb-6">
                    <Link to="/"
                        className={`no-underline text-white font-bold px-6 py-6 hover:bg-white hover:text-black
                          ${location.pathname === "/" ? 'bg-blue-200 text-black' : ''}`}>Home</Link>
                </li>
                <li className="inline-block pt-6 pb-6">
                    <Link to="/about"
                        className={`no-underline text-white font-bold px-6 py-6 hover:bg-white hover:text-black
                          ${location.pathname === "/about" ? 'bg-blue-200 text-black' : ''}`}>About</Link>
                </li>
                <li className="inline-block pt-6 pb-6">
                    <Link to="/articles"
                        className={`no-underline text-white font-bold px-6 py-6 hover:bg-white hover:text-black
                          ${location.pathname === "/articles" ? 'bg-blue-200 text-black' : ''}`}>Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;