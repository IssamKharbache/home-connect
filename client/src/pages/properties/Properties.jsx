import SearchBar from "../../components/hero/SearchBar";
import Loading from "../../components/loading/Loading";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import "./properties.css";
import { BeatLoader, HashLoader, RingLoader } from "react-spinners";

const PropertiesPage = () => {
  const { data, isError, isLoading } = useProperties();
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
        <SearchBar />
        <div className="paddings flexCenter properties">
          {data.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
