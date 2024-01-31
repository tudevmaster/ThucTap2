import React, { useState, useEffect } from "react";
import "./Sliders.css";
// import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faFill,
  faHeart,
  faHome,
  faPlus,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const SliderComponent = () => {
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
                      <div className="box">
                        <img src="https://media.istockphoto.com/id/1442113721/fr/photo/canap%C3%A9-en-tissu-blanc-plante-de-figuier-en-feuilles-bureau-et-chaise-en-bois-dans-un-mur.webp?b=1&s=170667a&w=0&k=20&c=UwJwIdznV5JXxJaJzJ-iQWlAVfxQ6DxienXXUQvWpws=" />
                        <span className="spa">Featured</span>
                        <span className="spaend">For sale</span>
                        <span className="save">
                          <i className="saveitem">
                            <FontAwesomeIcon
                              icon={faHome}
                              style={{ color: "#ffa920" }}
                            />
                          </i>
                        </span>
                        <div className="name">
                          <a>
                            <h3>Gorgeous Apartment Building</h3>{" "}
                          </a>
                          <p>58 Hullbrook Road, Billesley, B13 0LA</p>
                        </div>
                        <div className="price">$7,500</div>
                        <div className="info">
                          <div>
                            <p>
                              <FontAwesomeIcon icon={faBed} /> Beds:{" "}
                              <strong>4</strong>
                            </p>
                          </div>
                          <div>
                            <p>
                              <FontAwesomeIcon icon={faBath} /> Baths:{" "}
                              <strong>2</strong>
                            </p>
                          </div>
                          <div>
                            <p>
                              <FontAwesomeIcon icon={faHeart} /> Sqft:{" "}
                              <strong>1150</strong>
                            </p>
                          </div>
                        </div>
                        <div className="author">
                          <div>
                            <p>
                              <FontAwesomeIcon
                                icon={faPlus}
                                style={{ color: "#ffa920" }}
                              />
                              Compare
                            </p>
                          </div>
                          <div>
                            <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                          </div>
                          <div>
                            <p>3 years ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
