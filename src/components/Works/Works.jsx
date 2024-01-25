import { useRef } from "react";
import "./Works.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Chukti-Anime Design",
    img: "/chukti.png",
    desc: "Chukti is a Popular Among indian kids and super popular in Indian households , I decided to give her An anime touch with my artstyle",
  },
  {
    id: 2,
    title: " The Good feel Cream Ad ",
    img: "/poster2.png",
    desc: "Adverstisemt Poster Design for Ayurveda House's herbal 5 use Cream. made in photoshop",
  },
  {
    id: 3,
    title: "Smart Security Application System",
    img: "/IoT.jpg",
    desc: "This Project endeavors to revolutionize home security through the development of a sophisticated smart home application system designed for intruder detection. Leveraging the synergies of Internet of Things (IoT) technologies, including Light Dependent Resistor (LDR), ultrasonic, touch, and Infrared (IR) sensors, integrated with an Arduino-based hardware platform, the system provides a comprehensive solution for enhanced security and user-centric experiences.",
  },
  {
    id: 4,
    title: "CyberBunnies",
    img: "/Here to Connect.png",
    desc: "Bunny designs for my CyberBunnies Web Application",},
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Works</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;