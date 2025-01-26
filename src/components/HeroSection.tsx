import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="animate-fade-in px-4 sm:px-8 lg:px-16 mb-16 lg:mb-24">
      <div className="flex flex-col lg:flex-row items-center h-auto lg:h-screen font-serif">
        <div className="flex-1 animate-slide-in-left text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-cyan-600 font-extrabold font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span>Hello, I'm Rimsha</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg lg:text-xl mb-6">
            Hello! I'm Rimsha Mukhtar, a dedicated and creative Web Developer.
            My journey in web development began with a strong foundation in
            HTML, CSS, JavaScript, React.js, and TypeScript. Currently, I'm
            diving into Next.js to deepen my knowledge and explore advanced
            front-end possibilities.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="text-gray-300 px-6 py-3 rounded-full bg-gradient-to-br from-cyan-600 via-cyan-700 font-bold hover:scale-105 transform transition duration-300">
              Hire me
            </button>
            <button className="text-gray-300 px-6 py-3 rounded-full bg-gradient-to-br from-cyan-600 via-cyan-700 font-bold hover:scale-105 transform transition duration-300">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center lg:justify-end">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] animate-bounce-slow">
            <Image
              src="/rimsha.jpg"
              alt="Rimsha"
              width={300}
              height={300}
              className="rounded-full bg-transparent shadow-md shadow-gray-400 bg-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
