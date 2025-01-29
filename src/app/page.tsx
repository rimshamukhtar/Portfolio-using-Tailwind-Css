import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import ContactUs from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home(){
  return(
    <main className="flex min-h-screen flex-col bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
      <HeroSection />
        <br />
          <br />
          <br />
      <About />
      <Skills />
      <Projects />
      <br />
      <br />
      <br />
      <ContactMe />
      </div>
      <Footer />
 
    </main>
  )
}
