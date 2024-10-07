import { useContext, useState } from "react";

import Loading from "../../components/loading/Loading";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import "../properties/properties.css";

import SearchBar from "../properties/SearchBar";
import UserDetailContext from "../../context/UserDetailContext";

const BookingsPage = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");
  const {
    userDetails: { bookings },
  } = useContext(UserDetailContext);

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching properties</span>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="paddings flexCenter properties">
          {data
            .filter((property) =>
              bookings.map((booking) => booking.id).includes(property.id)
            )
            .filter(
              (property) =>
                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                property.country.toLowerCase().includes(filter.toLowerCase())
            )
            .map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
