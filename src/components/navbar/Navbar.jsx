
import "./navbar.scss";
import Sidebar from "../slidebar/Slidebar";
import { motion } from "framer-motion";
function Navbar() {
  return (
<div className='navbar'>
{/* Sidebar */}
      <div className="wrapper">
        <Sidebar/>
      <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="name_"
        >
          Rashi's Porfolio
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        <div className="social">
          <a href="https://www.instagram.com/rashiiusa/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/rashi12122001">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.behance.net/rashiarora6">
            <img src="/behance.png" alt="" />
          </a>
        </div>
        </motion.span>
      </div>
</div>
  )
}

export default Navbar