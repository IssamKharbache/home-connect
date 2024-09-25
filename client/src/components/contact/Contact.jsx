import "./contact.css";
//icons
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoIosVideocam } from "react-icons/io";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          {/*  */}
          <span className="orangeText">Have a question?</span>
          <span className="primaryText">Contact Us</span>
          <span className="secondaryText">
            Reach out to us for personalized support and expert guidance every
            step of the way!
          </span>
          {/*  */}
          <div className="flexColStart contact-modes">
            {/* first row */}
            <div className="flexStart row">
              {/* call mode */}
              <div className="flexColCenter mode">
                {/*  */}
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">(+91) 1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">Call us now</div>
              </div>
              {/* message mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiOutlineChatBubbleBottomCenterText size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message </span>
                    <span className="secondaryText">(+45) 1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">Message us now</div>
              </div>

              {/*  */}
            </div>
            {/* second row */}
            <div className="flexStart row">
              {/* video mode */}
              <div className="flexColCenter mode">
                {/*  */}
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoIosVideocam size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Book a video call</span>
                    <span className="secondaryText">home@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Book now</div>
              </div>
              {/* chat mode*/}
              <div className="flexColCenter mode">
                {/*  */}
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat now</span>
                    <span className="secondaryText">(+91) 1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat us now</div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
