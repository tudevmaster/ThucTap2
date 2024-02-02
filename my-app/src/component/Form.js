import { React } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMap,
  faPhone,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faRocketchat, faThinkPeaks } from "@fortawesome/free-brands-svg-icons";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="left-column">
          <h1>We provide the most suitable and quality real estate.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
            tristique metus proin id lorem odio
          </p>

          <div className="boxForm">
            <div className="icn">
              <FontAwesomeIcon icon={faMap} />
            </div>
            <div className="cnt">
              <h3>Office address</h3>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
          <div className="boxForm1">
            <div className="icn1">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="cnt1">
              <h3>Request a call back</h3>
              <p>314-555-0123</p>
            </div>
          </div>
          <div className="boxForm2">
            <div className="icn2">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="cnt2">
              <h3>Email </h3>
              <p>hellosupport@gmail.com </p>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="sub-column">
            <form>
              <div className="contact">
                <h1>
                  Contact Us{" "}
                  <FontAwesomeIcon
                    icon={faRocketchat}
                    style={{ color: "#ffa920" }}
                  />
                </h1>
                <p>We will respond as soon as we receive your message.</p>
              </div>
              <div>
                <label htmlFor="yourName">Your Name:</label>
                <input type="text" id="yourName" name="yourName" />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>

              <div>
                <label htmlFor="selectOption">Select Option:</label>
                <select id="selectOption" name="selectOption">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>

              <div></div>

              <div>
                <button type="submit">
                  <FontAwesomeIcon icon={faPlane} style={{ color: "white" }} />{" "}
                  Send request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
