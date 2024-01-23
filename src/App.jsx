import "./app.scss";
// import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
// import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";

const App = () => {
  return (
    <div> 
      <section id="Home">
        <Navbar />
        <Hero/>
      </section>
      <section id="About">
      <Parallax type="services" />
      </section>
      <section id='skills'>
        skills
      </section>
      <section id='Projects'>
        proejcts
      </section>
      <section id='experience'>
        <Parallax/>
      </section>
      <section id='contact Me'>
        memememmemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      </section>
    </div>
  );
};

export default App;