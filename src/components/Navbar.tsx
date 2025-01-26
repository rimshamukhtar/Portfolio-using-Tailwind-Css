'use client';  // Add this line at the very top

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-cyan-800 text-gray-200 font-serif sticky top-0 z-10">
      <div className="flex justify-between items-center p-3">
        {/* Logo */}
        <a href="#" className="hover:underline font-bold text-2xl">
          Rimsha
        </a>

        {/* Hamburger Icon */}
        <button
          className="text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-16 px-12 font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About Me</Link>
          </li>
          <li>
            <Link href="/Skills">Skills</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/ContactUs">Contact Me</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-cyan-800 lg:hidden font-bold text-lg space-y-4 py-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About Me</Link>
          </li>
          <li>
            <Link href="/Skills">Skills</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/ContactUs">Contact Me</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
