import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./properties.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Properties = () => {
  return (
    <section className="p-wrapper">
      <div className="paddings innerWidth p-container">
        <div className="p-head flexColStart">
          <span className="orangeText">Our Best Choices</span>
          <span className="primaryText">Popular Properties</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((property, idx) => (
            <SwiperSlide key={idx}>
              <div className="flexColStart p-card">
                <img src={property.image} alt={property.name} />
                <span className="secondaryText p-price">
                  <span style={{ color: "green" }}>$</span>
                  <span>{property.price}</span>
                </span>
                <span className="primaryText ">{property.name}</span>
                <span className="secondaryText">{property.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Properties;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter p-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
