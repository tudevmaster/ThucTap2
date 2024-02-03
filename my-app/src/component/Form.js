import { React } from "react";
import "./Form.css";
import "./Agent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowRight,
  faEnvelope,
  faFolderOpen,
  faMap,
  faPhone,
  faPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faRocketchat,
  faFacebook,
  faTwitter,
  faInstagram,
  faInvision,
  faOpencart,
} from "@fortawesome/free-brands-svg-icons";

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
              <div className="name">
                <label htmlFor="yourName">Your Name:</label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  placeholder="
                  ___Your name"
                />
                <div className="icntfr">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#ffa920" }} />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="___Phone"
                  />
                  <div className="icntNe">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#ffa920" }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="___Email"
                  />
                  <div className="icntNe">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#ffa920" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="selectOption">Properties type:</label>
                <select id="selectOption" name="selectOption">
                  <option value="option1">Choose:</option>
                  <option value="option1">Apartment</option>
                  <option value="option2">House</option>
                  <option value="option3">Rent</option>
                </select>
              </div>

              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="_____Your message"
                ></textarea>
                <div className="icntM">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffa920" }}
                  />
                </div>
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
      <div className="blog">
        <div className="col-lg-12-product">
          <div className="title">
            <h2>Form our blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </p>
          </div>
        </div>{" "}
        <div className="cont">
          <div className="rowt">
            <div className="col-lg-4 col-md-4">
              <div className="boxrent">
                <div className="imagerent">
                  <img
                    src="https://media.istockphoto.com/id/1386471399/fr/photo/int%C3%A9rieur-moderne-de-salle-de-vie-rendu-3d.webp?b=1&s=170667a&w=0&k=20&c=Tw6rBD64fB3dEOHZTsb7rre16pHa92dAHAosiBtyMDg="
                    alt="Agent"
                  />
                  <div className="imgBlog">
                    <div className="title-1">Aprill</div>
                    <div className="title-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faFolderOpen}
                        style={{ color: "#8e8e93" }}
                      />
                      <p>Housing</p>
                    </div>
                  </div>
                </div>
                <div className="contentrent1">
                  <h3 className="cntBlog">
                    We are hiring ‘moderately,’ says Compass CEO
                  </h3>
                  <p>
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      // style={{ color: "white" }}
                    />
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-4">
              <div className="boxrent">
                <div className="imagerent">
                  <img
                    src="https://media.istockphoto.com/id/1386471399/fr/photo/int%C3%A9rieur-moderne-de-salle-de-vie-rendu-3d.webp?b=1&s=170667a&w=0&k=20&c=Tw6rBD64fB3dEOHZTsb7rre16pHa92dAHAosiBtyMDg="
                    alt="Agent"
                  />
                  <div className="imgBlog">
                    <div className="title-1">Aprill</div>
                    <div className="title-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faFolderOpen}
                        style={{ color: "#8e8e93" }}
                      />
                      <p>Housing</p>
                    </div>
                  </div>
                </div>
                <div className="contentrent1">
                  <h3 className="cntBlog">
                    We are hiring ‘moderately,’ says Compass CEO
                  </h3>
                  <p>
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      // style={{ color: "white" }}
                    />
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-4">
              <div className="boxrent">
                <div className="imagerent">
                  <img
                    src="https://media.istockphoto.com/id/1386471399/fr/photo/int%C3%A9rieur-moderne-de-salle-de-vie-rendu-3d.webp?b=1&s=170667a&w=0&k=20&c=Tw6rBD64fB3dEOHZTsb7rre16pHa92dAHAosiBtyMDg="
                    alt="Agent"
                  />
                  <div className="imgBlog">
                    <div className="title-1">Aprill</div>
                    <div className="title-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={faFolderOpen}
                        style={{ color: "#8e8e93" }}
                      />
                      <p>Housing</p>
                    </div>
                  </div>
                </div>
                <div className="contentrent1">
                  <h3 className="cntBlog">
                    We are hiring ‘moderately,’ says Compass CEO
                  </h3>
                  <p>
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      // style={{ color: "white" }}
                    />
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
