import { useQuery } from "react-query";
import "./single-property.css";
import { useLocation } from "react-router-dom";
import { getSpecificProperty } from "../../utils/apiCalls/api";
import Loading from "../../components/loading/Loading";
//icons
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Map from "../../components/map/Map";

const SingleProperty = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["singleProperty", id], () =>
    getSpecificProperty(id)
  );

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    <div className="wrapper">
      <div className="flexCenter paddings">
        <span>Error while fetching single property</span>
      </div>
    </div>;
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        {/* image */}
        <img src={data?.image} alt={data?.title} />
        {/* details */}
        <div className="flexCenter property-details">
          {/* left  */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span
                className="orangeText"
                style={{ fontSize: "1.5rem", color: "green" }}
              >
                ${data?.price}
              </span>
            </div>
            {/* facilities details */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.bathrooms == 1
                    ? `${data?.facilities?.parking} Bathroom`
                    : `${data?.facilities?.parking} Bathrooms`}{" "}
                </span>
              </div>
              {/* garages */}
              <div className="flexStart facility">
                <GiHomeGarage size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.parking == 1
                    ? `${data?.facilities?.parking} Garage`
                    : `${data?.facilities?.parking} Garages`}
                </span>
              </div>
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaBed size={20} color="#1F3E72" />
                {data?.facilities?.bedrooms == 1
                  ? `${data?.facilities?.bedrooms} Bedroom`
                  : `${data?.facilities?.bedrooms} Bedrooms`}
              </div>
            </div>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>
            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} color="#1F3E72" />
              <span
                className="secondaryText"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {data?.address}, {data?.city}, {data?.country}
              </span>
            </div>
            {/* booking button */}
            <button className="button">Book a visit</button>
          </div>
          {/* right */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
