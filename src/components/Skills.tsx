import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

const Skills = () => {
  return (
    <section className='text-white'>
      <div className='container mx-auto flex flex-col items-center justify-center h-screen gap-6 font-serif text-cyan-200'>
        
        <h1 className='text-center font-bold text-xl border-2 border-cyan-600 bg-cyan-700 hover:bg-cyan-800 text-white p-2 rounded-lg w-36 shadow-lg transition-all duration-300'>
          Skills
        </h1>

        <h2 className='font-extrabold text-4xl text-center mb-8'>
          What I Can Do
        </h2>

        <div className='flex flex-col sm:flex-row sm:gap-6 items-center justify-center'>
          <div className='flex items-center justify-center w-80 h-14 text-center font-bold text-xl p-2 rounded-full shadow-lg border-2 border-cyan-800 bg-cyan-50 text-cyan-900 transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-cyan-600'>
            <FaHtml5 className="text-3xl mr-3 text-red-600 animate-pulse" /> HTML
          </div>

          <div className='flex items-center justify-center w-80 h-14 text-center font-bold text-xl p-2 rounded-full shadow-lg border-2 border-cyan-800 bg-cyan-50 text-cyan-900 transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-cyan-600'>
            <FaCss3Alt className="text-3xl mr-3 text-blue-600 animate-pulse" /> CSS
          </div>

          <div className='flex items-center justify-center w-80 h-14 text-center font-bold text-xl p-2 rounded-full shadow-lg border-2 border-cyan-800 bg-cyan-50 text-cyan-900 transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-cyan-600'>
            <FaJs className="text-3xl mr-3 text-yellow-500 animate-pulse" /> JavaScript
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
