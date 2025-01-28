import React from 'react';
import Image from 'next/image';
import ATM from "../../public/ATM pic.jpg";
import calculator from "../../public/calculator.jpg";
import currencyconverter from "../../public/currency converter.webp";
import numberguessing from "../../public/number guessing.jpg";
import todolist from "../../public/to-do-list.jpg";
import wordcounter from "../../public/word counter.png";
import blogImage from "../../public/blog.jpg"; // Replace with the actual blog image
import furnitureImage from "../../public/furniture.jpg"; // Replace with the actual furniture image
import drivehubImage from "../../public/drivehub.jpg"; // Replace with the actual drivehub image

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto text-white flex flex-col items-center justify-center gap-6 px-4">
      {/* Title */}
      <h1 className="font-extrabold text-center text-2xl font-serif border-2 border-cyan-800 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg w-48 sm:w-64">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[{
          image: ATM,
          title: "ATM Machine",
          description: "An interactive ATM simulation project.",
          link: "https://github.com/rimshamukhtar/Colorfull-ATM_Machine",
        }, {
          image: calculator,
          title: "Simple Calculator",
          description: "A basic calculator for arithmetic operations.",
          link: "https://github.com/rimshamukhtar/simple-calculator",
        }, {
          image: currencyconverter,
          title: "Currency Converter",
          description: "Easily convert currencies in real-time.",
          link: "https://github.com/rimshamukhtar/simple-calculator",
        }, {
          image: numberguessing,
          title: "Number Guessing Game",
          description: "A fun game to guess numbers within range.",
          link: "https://github.com/rimshamukhtar/cli_number_gussing",
        }, {
          image: todolist,
          title: "To-do List",
          description: "Keep track of daily tasks effectively.",
          link: "https://github.com/rimshamukhtar/Colorfull-Todo-list-Application",
        }, {
          image: wordcounter,
          title: "Word Counter",
          description: "Count words and characters in real-time.",
          link: "https://github.com/rimshamukhtar/Typescript-Word_Counter",
        }, {
          image: blogImage,
          title: "AI in Future Blog",
          description: "A dynamic blog website discussing AI advancements.",
          link: "https://github.com/rimshamukhtar/ai-in-future-blog",
        }, {
          image: furnitureImage,
          title: "Furniture Website",
          description: "An elegant website showcasing furniture collections.",
          link: "https://github.com/rimshamukhtar/furniture-website",
        }, {
          image: drivehubImage,
          title: "DriveHub Website",
          description: "A car marketplace featuring a user-friendly design.",
          link: "https://github.com/rimshamukhtar/drivehub-website",
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
