import { React } from "react";
import "./Header.css";
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
              <input type="text" placeholder="Enter value" />
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <select>
                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
              </select>
            </div>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
};
export default Header;
