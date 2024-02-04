import React, { useState, useEffect } from "react";
import "./Footer.css";
// import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <div className="brFoot">
        <div className="Foot">
          <div className="columnFoot">
            <div className="imageFoot">
              <img src="https://images.unsplash.com/photo-1706562018427-78960ee73757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
            <div className="contentFoot">
              <h3>You need a house</h3>
              <p>
                Tell us your needs, we will give you thousands of suggestions
                for the dream home.
              </p>
            </div>
            <div className="butFoot">
              <button className="btn-headFoot active">
                <p className="iconFoot">
                  <FontAwesomeIcon icon={faPhone} />
                </p>
                <p className="sellFoot">Contact seller</p>
              </button>
            </div>
          </div>

          <div className="columnFoot">
            <div className="imageFoot">
              <img src="https://images.unsplash.com/photo-1706562018427-78960ee73757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
            <div className="contentFoot">
              <h3>Sell your house</h3>
              <p>
                We will connect you to thousands of people who need to buy a
                home.
              </p>
            </div>
            <div className="butFoot">
              <button className="btn-headFoot active">
                <p className="iconFoot">
                  <FontAwesomeIcon icon={faHome} />
                </p>
                <p className="sellFoot">Sell Property</p>
              </button>
            </div>
          </div>
        </div>
        <div className="infoFoot">
          <div className="columnInfo">
            <h3 className="ttFoot">Office Address</h3>

            <h2 className="NameIn">Head office:</h2>
            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <h2 className="NameIn">Branch:</h2>
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
            <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
          </div>
          <div className="columnInfo">
            <h3 className="ttFoot">Contact Seller</h3>
            <div className="Seller">
              <div className="columnSeller">
                <img src="https://plus.unsplash.com/premium_photo-1694618624837-4b33aeadf93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"></img>
              </div>

              <div className="columnSeller">
                <div className="cntSeller">
                  <h2>Darrell Steward</h2>
                  <p>(405) 555-0128</p>
                </div>
              </div>
            </div>
            <div className="Seller">
              <div className="columnSeller">
                <img src="https://plus.unsplash.com/premium_photo-1694618624837-4b33aeadf93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"></img>
              </div>

              <div className="columnSeller">
                <div className="cntSeller">
                  <h2>Darrell Steward</h2>
                  <p>(405) 555-0128</p>
                </div>
              </div>
            </div>
            <div className="Seller">
              <div className="columnSeller">
                <img src="https://plus.unsplash.com/premium_photo-1694618624837-4b33aeadf93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"></img>
              </div>

              <div className="columnSeller">
                <div className="cntSeller">
                  <h2>Darrell Steward</h2>
                  <p>(405) 555-0128</p>
                </div>
              </div>
            </div>
          </div>
          <div className="columnInfo">
            <h3>Our Company</h3>
            <a href="#">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffa920" }}
              />{" "}
              Properti for sale
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffa920" }}
              />{" "}
              About us
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffa920" }}
              />{" "}
              Our Agents
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffa920" }}
              />{" "}
              FaQ
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffa920" }}
              />{" "}
              Pricing
            </a>
          </div>
          <div className="columnInfo">
            <h3>Newsletter</h3>
            <h5> Sign up to receive the latest articles</h5>
            <input type="email" placeholder="email address..."></input>
            <button>
              Sign up{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffa920" }}
              />{" "}
            </button>
            <label className="Check">
              <input type="checkbox" checked="checked" />I have read and agree
              to the terms & conditions
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
