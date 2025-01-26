import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-900 px-4 py-8 sm:py-12">
      <div className="w-full max-w-lg text-center text-zinc-500 font-serif p-4">
        <h2 className="mb-4">
          <span className="font-bold border-2 border-cyan-800 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-lg">
            About me
          </span>
        </h2>
        <p className="p-4 text-zinc-400">
          Hello! I'm Rimsha Mukhtar, a dedicated and creative Web Developer with
          a flair for building interactive and visually engaging web
          applications. My journey in web development began with a strong
          foundation in HTML, CSS, JavaScript, React.js, and TypeScript, and
          I'm continually expanding my skill set to bring innovative solutions
          to life. Currently, I'm diving into Next.js to deepen my knowledge
          and explore advanced front-end possibilities.
        </p>
        <button className="text-gray-300 bg-gradient-to-br from-cyan-600 via-cyan-700 border-2 w-full sm:w-48 mt-4 rounded-lg font-bold p-3 border-cyan-800">
          <Link href="https://www.linkedin.com/in/rimsha-mukhtar-ahmed-6b88632b5">
            View my Profile
          </Link>
        </button>
      </div>
    </section>
  );
};

export default About;




