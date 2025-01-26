import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-300 rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col sm:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-3 sm:mb-0">
          © 2024 <a href="#" className="hover:underline">Rimsha</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-cyan-800 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">About Me</a>
          </li>
          <li>
            <a href="#skills" className="hover:underline me-4 md:me-6">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
          </li>
          <li>
            <a href="#contactme" className="hover:underline">Contact Me</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
