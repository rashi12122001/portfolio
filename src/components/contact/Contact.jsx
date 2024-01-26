import { useRef, useState } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3xvv9c8",
        "template_8iu45lu",
        formRef.current,
        "zNv-W1vaarjXrelfN"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Email Me 🚀</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>rashiarora12122001@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M4.85904 6C6.67396 4.14864 9.20308 3 12.0005 3C14.7979 3 17.327 4.14864 19.1419 6M16.4727 9C15.374 7.7725 13.7774 7 12.0004 7C10.2234 7 8.62687 7.7725 7.52823 9M3.39199 16.571C8.17161 11.8351 15.8855 11.8704 20.6215 16.6501C20.7659 16.7958 20.9059 16.9442 21.0414 17.0952C21.3243 17.4105 21.4658 17.5681 21.5288 17.7917C21.5802 17.9738 21.5733 18.2118 21.5113 18.3906C21.4352 18.6101 21.2653 18.7784 20.9255 19.1151L19.7298 20.2999C19.443 20.5841 19.2996 20.7262 19.1299 20.8008C18.98 20.8667 18.8162 20.8948 18.6529 20.8826C18.468 20.8688 18.2855 20.7826 17.9204 20.6102L15.9673 19.6878C15.5425 19.4872 15.3301 19.3869 15.1924 19.2285C15.0709 19.0889 14.9906 18.9183 14.9604 18.7357C14.9261 18.5286 14.9841 18.301 15.1001 17.8458L15.3402 16.9037C13.2037 16.0897 10.8142 16.0772 8.67073 16.8732L8.9022 17.8174C9.01404 18.2737 9.06997 18.5018 9.03377 18.7085C9.00184 18.8908 8.91997 19.0607 8.79725 19.1992C8.65807 19.3563 8.44477 19.4546 8.01817 19.6513L6.05668 20.5558C5.69003 20.7248 5.50669 20.8094 5.32171 20.8215C5.1583 20.8322 4.99477 20.8026 4.84548 20.7353C4.67646 20.6592 4.53437 20.5158 4.25018 20.2289L3.06537 19.0332C2.72866 18.6934 2.56031 18.5235 2.48628 18.3034C2.42596 18.124 2.42117 17.886 2.47422 17.7043C2.53934 17.4813 2.68224 17.325 2.96804 17.0124C3.10495 16.8626 3.24627 16.7154 3.39199 16.571Z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;


