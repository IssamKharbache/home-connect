import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import "../App.css";
import Companies from "../components/companies/Companies";
import Properties from "../components/properties/Properties";
import Value from "../components/value/Value";
import Contact from "../components/contact/Contact";
import GetStarted from "../components/getStarted/GetStarted";
import Footer from "../components/footer/Footer";

const Website = () => {
  return (
    <div className="App">
      <div className="">
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies />
      <Properties />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};
export default Website;
