import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>


        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;