
import Image from "next/image"
import bannerimage from "../../public/rimsha.jpeg"

export default function HeroSection(){
    return(
        <section className="animate-fade-in">
            <div className="flex items-center h-screen font-serif">
           
                <div className="flex-1 animate-slide-in-left">
                    <h1 className="text-cyan-600 font-extrabold font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
                        <span>Hello, I'm Rimsha</span>
                    </h1>
                    <p className="text-zinc-400 text-base mb-6 sm:text-lg lg:text-xl">
                    Hello! I'm Rimsha Mukhtar, a dedicated and creative Web Developer . My journey in web development began with a strong foundation in HTML, CSS, JavaScript, React.js and TypeScript. Currently, I'm diving into Next.js to deepen my knowledge and explore advanced front-end possibilities.</p>
                    
                    <div>
                        <button className="text-gray-300 px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-cyan-600 via-cyan-700 font-bold hover:scale-105 transform transition duration-300">
                            Hire me
                        </button>
                        <button className="text-gray-300 px-6 py-3 rounded-full bg-gradient-to-br from-cyan-600 via-cyan-700 font-bold hover:scale-105 transform transition duration-300">
                            Download CV
                        </button>
                    </div>
                </div>

              
                <div className="flex-1 relative w-[250px] h-[250px] lg:w-[400px] animate-bounce-slow">
                    <Image src="/rimsha.jpg" alt="Rimsha" width={300} height={300}
                        className="w-56 h-60 rounded-full bg-transparent shadow-md shadow-gray-400 bg-cover ml-36"/>
                </div>
            </div>
        </section>
    )
}
