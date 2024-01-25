import { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";
import Resume from './resume.pdf';
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Am currently exploring development
          <br /> and Design
        </p>
        <hr />
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
        >
          <h2>About</h2>
          <p>
          Hello, I'm Rashi, currently pursuing B.Tech in Electronics and Communication Engineering at Guru Tegh Bahadur Institute of Technology, New Delhi, under the esteemed IP University. I am passionate about various forms of creativity, ranging from digital art, drawings, and graphic design to web development.
          </p>
          <p>
          With a keen interest in technology and innovation, I have supplemented my academic journey with practical experiences. I've completed two design internships, honing my skills in graphic design and expanding my knowledge in the field. Additionally, I have undergone IoT training, adding a technological dimension to my skill set.
          </p>
          <p>
          Beyond my academic and professional pursuits, I find joy in diverse interests. Cooking, singing, and indulging in the captivating world of anime are some of my favorite pastimes. As an artist, I showcase my creations on Instagram, allowing others to glimpse into my imaginative world.
          </p>
          <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        </motion.div>
        <motion.div
          className="box"
        >
             <h2>Skills</h2>
             <h3>Web Development</h3>
             <p>
                HTML/CSS/Javascript/Reactjs/MERN/PHP
             </p>
             <h3>Design</h3>
             <p>
                Digital Art/Graphic Design/UI/UX
             </p>
             <h3>Languages</h3>
             <p>
                C++/JAVA/python
             </p>
             <h3>Data Analysis</h3>
             <p>
                SQL/DBMS/POWERBI
             </p>
             <h3>Others</h3>
             <p>
                Art making/IOT
             </p>


        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;