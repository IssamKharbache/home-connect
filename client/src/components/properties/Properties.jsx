import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./properties.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../propertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { HashLoader } from "react-spinners";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching properties</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <HashLoader
          height="80"
          width="80"
          radius={1}
          aria-label="ring-loading"
          color="#4066ff"
        />
      </div>
    );
  }
  return (
    <section className="p-wrapper">
      <div className="paddings innerWidth p-container">
        <div className="p-head flexColStart">
          <span className="orangeText">Our Best Choices</span>
          <span className="primaryText">Popular Properties</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.slice(0, 8).map((property, idx) => (
            <SwiperSlide key={idx}>
              <PropertyCard property={property} />
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
