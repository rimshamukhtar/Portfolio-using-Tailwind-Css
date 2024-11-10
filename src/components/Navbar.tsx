import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-cyan-800 text-gray-200 font-serif sticky-top-0'>
    <a href='#' className='hover:underline font-bold text-2xl'>Rimsha</a>
    <div className='flex gap-4 font-thin'>
      <ul className='flex space-x-16 px-12 font-bold'>
        <li> <Link href="/">Home</Link></li>
        <li><Link href="/About">About Me</Link></li>
        <li> <Link href="/Skills">Skills</Link></li>
        <li>  <Link href="/Projects">Projects</Link></li>
        <li> <Link href="/ContactUs">Contact Me</Link> </li>
      </ul>
    </div>
      
    </div>
  )
}

export default Navbar
