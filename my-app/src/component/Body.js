import { React } from "react";
import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faHeart,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <>
      <div className="col-lg-12-body">
        <div className="title-section">
          <h4>Trusted by over 150+ major companies</h4>
        </div>
        {/* _______________________________________________________________________________SLIDE___________________________________________________ */}
        <div className="swiper-container">
          <div className="slider-container pb-5">
            <div className="slider-content">
              <div className="slide-item">
                <img src="data:image/png;base64,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" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q5A2w0UgIdpb8EXkmIcA8BBRW3UJwr-T9w&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3g66yNdH-ctiWdfD0_1_azVp_mvoszL9MA&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR626dWTlyoEAmxjBE7JrME7qbYFNpwyk10ZA&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX7BP0iJXMIAAI0Z8YwhyounpW9O8LWnCFQ&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoDuGYcZeA70FLyTKqrAOpo0GMHpXT0jcXs0uuL7rWR8GzGjir_dj88R0SrY-88TAw6o&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMEob_i26VBvF7hJU7hsdzfbgxZPgDJhRQw&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrL7Owsb64h061zh3tSByZRYiNfC7K47Vtg&usqp=CAU" />
              </div>
              <div className="slide-item">
                <img src="https://is.vnecdn.net/v101/31/65/11/4116531/assets/images/logo/logo-acura.png" />
              </div>
              {/* Repeat items as needed */}
            </div>
          </div>
        </div>
      </div>
      {/* _______________________________________________________________________________CARD PRODUCT________________________________________________________ */}
      <div className="col-lg-12-product">
        <div className="title">
          <h2>Featured properties</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </p>
        </div>
        <div className="box-tab1">
          <ul className="menu-tab1">
            <li>
              <h5 className="frs">Houses</h5>
            </li>
            <li>
              <h5>Smart House</h5>
            </li>
            <li>
              <h5>Apartments</h5>
            </li>
            <li>
              <h5>Office</h5>
            </li>
            <li>
              <h5>Villa</h5>
            </li>
            <li>
              <h5>Bungalow</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-tab1">
        <div className="content-inner">
          <div className="wrap-item">
            <div className="card-container">
              <div className="card">
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
              <div className="card">
                {" "}
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
              <div className="card">
                {" "}
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
              <div className="card">
                {" "}
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
      <div className="content-tab1">
        <div className="content-inner">
          <div className="wrap-item">
            <div className="card-container">
              <div className="card">
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
              <div className="card">
                {" "}
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
              <div className="card">
                {" "}
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
              <div className="card">
                {" "}
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
      <div className="col-lg-12-img">
        <div className="title">
          <h2>Search real estate by area</h2>
          <p>Find your dream apartment with our listing</p>
        </div>
        {/* _________________________________________________________________________IMAGE________________________________________________________ */}
        <div className="wrap-search">
          <div className="area">
            <div className="map">
              <img
                src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 1"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
            <div className="map">
              <img
                src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt="Slide 2"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
            <div className="map">
              <img
                src="https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="Slide 3"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
            <div className="map">
              <img
                src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 3"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
          </div>
          <div className="area">
            <div className="map">
              <img src="https://images.unsplash.com/photo-1705959708017-fa4400b1c8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D" />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
            <div className="map">
              <img
                src="https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 2"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
            <div className="map">
              <img
                src="https://plus.unsplash.com/premium_photo-1705418057300-84235e5f265a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 3"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
            <div className="map">
              <img
                src="https://images.unsplash.com/photo-1705522369595-40d0b2667739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D"
                alt="Slide 3"
              />
              <div className="content2">
                <h4> California</h4>
                <p>1570 listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* _______________________________________________________________________SALE______________________________________________________________ */}
      <div className="col-lg-12-product">
        <div className="title">
          <h2>Properties for sale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </p>
        </div>
        <div className="slider-container2">
          <div className="slider-content2"></div>
        </div>
      </div>
      {/* _______________________________________________________________________________MEET AGENT________________________________________________________________ */}
    </>
  );
};
export default Body;
