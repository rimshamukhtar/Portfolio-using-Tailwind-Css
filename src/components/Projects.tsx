
import React from 'react'
import Image from 'next/image'
import ATM from "../../public/ATM pic.jpg"
import calculator from "../../public/calculator.jpg"
import currencyconverter from "../../public/currency converter.webp"
import numberguessing from "../../public/number guessing.jpg"
import todolist from "../../public/to-do-list.jpg"
import wordcounter from "../../public/word counter.png"

const Projects = () => {
  return (
    <div className="container mx-auto text-white flex flex-col items-center justify-center gap-4">
      <h1 className='font-extrabold text-center text-2xl font-serif border-2 border-cyan-800 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg w-40'>
        My Projects
      </h1>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      
        <div className='w-60 h-72 border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <div className='h-40'>
            <Image src={ATM} alt="ATM Machine" width={400} height={400} className="bg-transparent shadow-md w-60 h-40 rounded-sm"/>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold font-serif text-center'>ATM Machine</h1>
            <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati excepturi</p>
          </div>
        </div>

      
        <div className='w-60 h-72 border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <div className='h-40'>
            <Image src={calculator} alt="Simple Calculator" width={400} height={400} className="bg-transparent shadow-md w-60 h-40 rounded-sm"/>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold font-serif text-center'>Simple Calculator</h1>
            <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati excepturi</p>
          </div>
        </div>

      
        <div className='w-60 h-72 border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <div className='h-40'>
            <Image src={currencyconverter} alt="Currency Converter" width={400} height={400} className="bg-transparent shadow-md w-60 h-40 rounded-sm"/>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold font-serif text-center'>Currency Converter</h1>
            <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati excepturi</p>
          </div>
        </div>
       
        <div className='w-60 h-72 border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <div className='h-40'>
            <Image src={numberguessing} alt="Number Guessing Game" width={400} height={400} className="bg-transparent shadow-md w-60 h-40 rounded-sm"/>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold font-serif text-center'>Number Guessing Game</h1>
            <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati excepturi</p>
          </div>
        </div>

       
        <div className='w-60 h-72 border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <div className='h-40'>
            <Image src={todolist} alt="To-do List" width={400} height={400} className="bg-transparent shadow-md w-60 h-40 rounded-sm"/>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold font-serif text-center'>To-do List</h1>
            <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati excepturi</p>
          </div>
        </div>

      
        <div className='w-60 h-72 border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <div className='h-40'>
            <Image src={wordcounter} alt="Word Counter" width={400} height={400} className="bg-transparent shadow-md w-60 h-40 rounded-sm"/>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold font-serif text-center'>Word Counter</h1>
            <p className='font-serif text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati excepturi</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

