import "./property-card.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";

const PropertyCard = ({ property }) => {
  return (
    <div className="flexColStart p-card">
      <AiFillHeart size={24} color="white" />
      <img src={property.image} alt={property.name} />

      <span className="secondaryText p-price">
        <span style={{ color: "green" }}>$</span>
        <span>{property.price}</span>
      </span>
      <span className="primaryText ">
        {truncate(property.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(property.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
