import "./hero.css";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ opacity: 0, y: "2rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover Most <br /> Beautiful and Suitable <br /> Properties
            </motion.h1>
          </div>
          {/* description */}
          <div className="flexColStart secondaryText hero-descr">
            <span>
              Your destination for finding beautiful homes and exceptional
              properties
            </span>
            <span>
              Whether you’re searching for a cozy apartment or spacious family
              house
            </span>
          </div>
          {/* SEARCH AREA */}
          <SearchBar />
        </div>
        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
