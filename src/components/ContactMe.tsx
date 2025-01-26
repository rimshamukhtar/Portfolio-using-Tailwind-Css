
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='text-white flex flex-col sm:flex-row h-auto sm:h-screen justify-center items-center gap-10'>
      <div className='bg-cyan-800 w-80 mb-10 sm:mb-56 flex flex-col p-4 rounded-lg'>
        <h1 className='font-serif text-2xl font-bold pb-2 text-white'>Let's Connect</h1>
        <p className='font-serif font-thin text-white mb-4'>
          I&rsquo;m always excited to collaborate on new projects, share ideas, and help bring creative concepts to life. Whether you have a question, a partnership opportunity, or just want to chat, feel free to reach out. I&rsquo;d love to hear from you!
        </p>
        
        <div className='flex justify-center gap-4'>
          <a href="https://https://github.com/rimshamukhtar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rimsha-mukhtar-ahmed-6b88632b5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
        </div>
      </div>
      
      <div className='w-full sm:w-1/2 flex flex-col justify-center p-4 gap-4'>
        <div>
          <span className='font-serif font-bold pb-2 text-cyan-700'>Your Email</span>
          <br />
          <input type="text" placeholder='abc123@gmail.com' className='w-full sm:w-96 rounded-md p-1 border-2 border-cyan-800 text-cyan-800' />
        </div>
        <div>
          <span className='font-serif font-bold pb-2 text-cyan-700'>Subject</span>
          <br />
          <input type="text" placeholder='just saying hi' className='w-full sm:w-96 rounded-md p-1 border-2 border-cyan-800' />
        </div>
        <div>
          <span className='font-serif font-bold pb-2 text-cyan-700'>Message</span>
          <br />
          <input type="text" placeholder="let's talk about... " className='w-full sm:w-96 rounded-md p-1 border-2 border-cyan-800' />
        </div>
        <button className='text-center font-serif text-gray-300 bg-gradient-to-br from-cyan-600 via-cyan-700 border-2 w-28 sm:w-32 m-4 rounded-lg font-bold p-1 border-cyan-800'>Submit</button>
      </div>
    </div>
  )
}

export default ContactMe
