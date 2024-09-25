import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Properties from "./components/properties/Properties";
import Value from "./components/value/Value";

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Properties />
      <Value />
    </div>
  );
}

export default App;
