import "./app.scss";
import Contact from "./components/contact/Contact";
import Works from "./components/Works/Works";
import Project from "./components/projects/Project_Main";
import Hero from "./components/hero/Hero";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";

const App = () => {
  return (
    <div> 
    <Cursor/>
      <section id="Home">
        <Navbar />
        <Hero/>
      </section>
      <section id="About">
      <Parallax type="services" />
      </section>
      <section>
      <About/>
      </section>
      <section id='Experience'>
        <Parallax/>
      </section>
      <section>
<Experience/>
      </section>
      <section id="Projects">
      </section>
     <Works/>
     <section id="Display">
        <Project/>
     </section>
      <section id='contact Me'>
        <Contact/>
      </section>
    </div>
  );
};

export default App;