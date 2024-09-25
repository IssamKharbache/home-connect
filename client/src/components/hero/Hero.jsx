import "./hero.css";
import SearchBar from "./SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover Most <br /> Beautiful and Suitable <br /> Properties
            </h1>
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
          <div className="image-container">
            <img src="./hero-image.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
