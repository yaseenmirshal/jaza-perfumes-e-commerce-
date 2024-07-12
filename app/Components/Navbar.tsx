'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="mx-auto px-4 max-h-20">
        <div className="flex justify-between items-center max-h-20">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <img className='max-h-32' src="./jazanewlog-removebg.png" alt="Jaza Perfumes Logo" />
              </a>
            </Link>
          </div>
          <div className="hidden md:flex justify-center flex-grow space-x-10 max-h-20">
            <Link href="/" legacyBehavior>
              <a className="py-4 px-2 text-gray-800 border-b-4 border-gray-800 font-semibold" style={{ color: '#3E2723' }}>HOME</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="py-4 px-2 text-gray-600 font-semibold hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>ABOUT</a>
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="py-4 px-2 text-gray-600 font-semibold hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>CONTACT</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="py-4 px-2 text-gray-600 font-semibold hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>STORE</a>
            </Link>
            <Link href="/categories" legacyBehavior>
              <a className="py-4 px-2 text-gray-600 font-semibold hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>CATEGORIES</a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-9">
            <FontAwesomeIcon icon={faHeart} className="text-gray-600 hover:text-orange-950  cursor-pointer " />
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-orange-950 cursor-pointer" />
            <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-orange-950  cursor-pointer pr-6" />
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
        <Link href="/" legacyBehavior>
          <a className="block text-sm px-2 py-4 text-gray-800 font-semibold" style={{ color: '#3E2723' }}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="block text-sm px-2 py-4 hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>About</a>
        </Link>
        <Link href="/products" legacyBehavior>
          <a className="block text-sm px-2 py-4 hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>Products</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="block text-sm px-2 py-4 hover:text-green-800 transition duration-300" style={{ color: '#3E2723' }}>Contact</a>
        </Link>
        <div className="flex items-center justify-around py-4">
          <FontAwesomeIcon icon={faHeart} className="text-gray-600 hover:text-green-800 cursor-pointer" />
          <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 hover:text-green-800 cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-green-800 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
