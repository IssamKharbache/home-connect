import { useState } from "react";

import Loading from "../../components/loading/Loading";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import "./properties.css";
import SearchBar from "./SearchBar";
import { CiWarning } from "react-icons/ci";

const PropertiesPage = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");
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
  if (
    data.filter((property) =>
      property.title.toLowerCase().includes(filter.toLowerCase())
    ).length === 0 &&
    data.filter((property) =>
      property.city.toLowerCase().includes(filter.toLowerCase())
    ).length === 0 &&
    data.filter((property) =>
      property.country.toLowerCase().includes(filter.toLowerCase())
    ).length === 0
  ) {
    return (
      <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar filter={filter} setFilter={setFilter} />
          <CiWarning size={55} color="#1F3E72" />
          <span className="primaryText">No properties found</span>
          <p className="secondaryText">
            Try searching with different keywords{" "}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="paddings flexCenter properties">
          {data
            .filter(
              (property) =>
                property.title.toLowerCase().includes(filter.toLowerCase()) ||
                property.city.toLowerCase().includes(filter.toLowerCase()) ||
                property.country.toLowerCase().includes(filter.toLowerCase())
            )
            .map((property, index) => {
              return <PropertyCard key={index} property={property} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
