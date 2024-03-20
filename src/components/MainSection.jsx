import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainSection() {
  return (
    <main id="main">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}