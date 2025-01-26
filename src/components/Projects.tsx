import React from 'react';
import Image from 'next/image';
import ATM from "../../public/ATM pic.jpg";
import calculator from "../../public/calculator.jpg";
import currencyconverter from "../../public/currency converter.webp";
import numberguessing from "../../public/number guessing.jpg";
import todolist from "../../public/to-do-list.jpg";
import wordcounter from "../../public/word counter.png";

const Projects = () => {
  return (
    <div className="container mx-auto text-white flex flex-col items-center justify-center gap-6 px-4">
      {/* Title */}
      <h1 className="font-extrabold text-center text-2xl font-serif border-2 border-cyan-800 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg w-48 sm:w-64">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card */}
        {[{
          image: ATM,
          title: "ATM Machine",
          description: "An interactive ATM simulation project.",
          link: "#", // You can replace this with the actual project link
        }, {
          image: calculator,
          title: "Simple Calculator",
          description: "A basic calculator for arithmetic operations.",
          link: "#",
        }, {
          image: currencyconverter,
          title: "Currency Converter",
          description: "Easily convert currencies in real-time.",
          link: "#",
        }, {
          image: numberguessing,
          title: "Number Guessing Game",
          description: "A fun game to guess numbers within range.",
          link: "#",
        }, {
          image: todolist,
          title: "To-do List",
          description: "Keep track of daily tasks effectively.",
          link: "#",
        }, {
          image: wordcounter,
          title: "Word Counter",
          description: "Count words and characters in real-time.",
          link: "#",
        }].map((project, index) => (
          <div
            key={index}
            className="w-full max-w-sm mx-auto border-2 border-cyan-950 bg-cyan-800 flex flex-col rounded-sm transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-4">
              <h1 className="font-bold font-serif text-center text-lg">
                {project.title}
              </h1>
              <p className="font-serif text-center text-sm text-gray-300">
                {project.description}
              </p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-gray-300 bg-gradient-to-br from-cyan-600 via-cyan-700 border-2 w-32 text-center mx-auto rounded-lg font-bold p-2 border-cyan-800 hover:bg-cyan-700"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
