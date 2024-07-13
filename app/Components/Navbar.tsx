'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-lg fixed w-full" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="mx-auto px-4 max-h-20">
        <div className="flex justify-between items-center max-h-20">
          <div className="flex items-center">
            <Link href="/" passHref>
                <img className='max-h-32' src="./jazanewlog-removebg.png" alt="Jaza Perfumes Logo" />
            </Link>
           
          </div>
          <div className="hidden md:flex justify-center flex-grow space-x-10 max-h-20">
            <NavLink href="/" exact>
              HOME
            </NavLink>
            <NavLink href="/About">ABOUT</NavLink>
            <NavLink href="/Contact">CONTACT</NavLink>
            <NavLink href="/Store">STORE</NavLink>
            <NavLink href="/categories">CATEGORIES</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-9">
            <FontAwesomeIcon icon={faHeart} className="text-gray-600 hover:text-orange-950 cursor-pointer" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-orange-950 cursor-pointer" />
            <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-orange-950 cursor-pointer pr-6" />
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-600 hover:text-green-800"
                x-show="!isOpen"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} style={{ backgroundColor: '#F7F3E9' }}>
        <NavLink href="/" exact>
          Home
        </NavLink>
        <NavLink href="/About">About</NavLink>
        <NavLink href="/Contact">Contact</NavLink>
        <NavLink href="/Store">Store</NavLink>
        <div className="flex items-center justify-around py-4">
          <FontAwesomeIcon icon={faHeart} className="text-gray-600 hover:text-green-800 cursor-pointer" />
          <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-green-800 cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-green-800 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

// Custom NavLink component to handle active link styling
interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, exact = false, children }) => {
  // Determine if the link is active based on current pathname
  const isActive = exact ? window.location.pathname === href : window.location.pathname.startsWith(href);

  return (
    <Link href={href} passHref>
      <div className="text-sm px-2 py-4 font-semibold transition duration-300">
        <a className={`${isActive ? 'text-gray-800 border-b-4 border-gray-800' : 'text-gray-600 hover:text-green-800'}`} style={{ color: '#3E2723' }}>
          {children}
        </a>
      </div>
    </Link>
  );
};

export default Navbar;
