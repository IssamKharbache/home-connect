import "./footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Logo" width={120} />
          <span className="secondaryText">
            Thank you for choosing us—your trusted partner in real estate.{" "}
            <br /> We’re here to help you every step of the way!
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            581, 123 Street, New York, NY 10012
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
