import { React } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFill,
  faHome,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="content">
          <h1>We will find a perfect home for you</h1>
          <p>
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>
        </div>
        <div className="flat-tabs">
          <div className="box-tab center">
            <ul className="menu-tab">
              <li className="item-title active">
                <h4 className="inner">Rent</h4>
              </li>
              <li className="item-title style">
                <h4 className="inner">Buy</h4>
              </li>
            </ul>
          </div>
          <div className="content-tab">
            <div className="input-box">
              <input type="text" placeholder="Type keyword..." />
              <select>
                <option value="option1">Property types</option>
                <option value="option1">Bunggalow</option>
                <option value="option2">Apartment</option>
                <option value="option2">House</option>
              </select>
              <select>
                <option value="optionA">Location</option>
                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
              </select>
              <a className="iconfillter">
                <FontAwesomeIcon icon={faSliders} />
              </a>
              <button className="btn-body">
                {" "}
                Search Now <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="number">
            <div className="nleft">
              <h1>1500+</h1>
              <p>Property ready</p>
            </div>
            <div className="nright">
              <h1>700+</h1>
              <p>Happy customer</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1706520560614-709627d1a67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>
      </div>
    </>
  );
};
export default Header;
