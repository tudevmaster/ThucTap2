import React, { useState, useEffect } from "react";
import "./Customer.css";
// import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

const SliderComponent1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 5; // Set the total number of slides
  const slidesToShow = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current slide index, and reset to 0 if it exceeds the total slides
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="col-lg-12-product">
        <div className="title">
          <h2>From our happy customers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
            tristique metus proin id lorem odio
          </p>
        </div>
        <div className="slider-container2">
          <div className="slider-content2"></div>
        </div>
      </div>
      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(${-currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div className="card1" key={index}>
              <div className="content-tab1">
                <div className="content-inner">
                  <div className="wrap-item">
                    <div className="card-container">
                      <div className="card1">
                        <div className="boxCus">
                          <div>
                            <div className="icontCus">
                              {" "}
                              <FontAwesomeIcon
                                icon={faRocketchat}
                                style={{ color: "#ffa920" }}
                              />
                            </div>
                            <div className="contentCus">
                              " Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Integer vel tortor justo.
                              Vestibulum vitae vulputate lacus. Aliquam
                              sollicitudin mauris odio. Fusce egestas
                              consectetur semper vulputate ”
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="auCus">
                        <div className="avatarCus">
                          <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8fDA%3D"></img>
                        </div>
                        <div className="NameCus">
                          <h3>Esther Howard</h3>
                          <p>Internet Security Assistant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="under">
          <p>
            Become our next customer, and find your dream home
            <a> Contact us: 314-555-0123</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SliderComponent1;
