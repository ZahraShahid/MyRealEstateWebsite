import React from "react";
import { Link } from "react-router-dom";
const PropertyCard = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <Link to="/property-details">
          <div className="single-product-wrap style-2">
            <div className="thumb">
              <img src={publicUrl + "assets/img/project/15.png"} alt="img" />
              <div className="product-wrap-details">
                <div className="media">
                  <div className="author">
                    <img
                      src={publicUrl + "assets/img/author/1.png"}
                      alt="img"
                    />
                  </div>
                  <div className="media-body">
                    <h6>
                      <Link to="/property-details">Owner Name</Link>
                    </h6>
                    <p>
                      <img
                        src={publicUrl + "assets/img/icon/location-alt.png"}
                        alt="img"
                      />
                      New York real estate{" "}
                    </p>
                  </div>
                  <a className="fav-btn float-right" href="#">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-details-inner">
              <h4>
                <Link to="/property-details">Daily Apartment</Link>
              </h4>
              <ul className="meta-inner">
                <li>
                  <img
                    src={publicUrl + "assets/img/icon/location2.png"}
                    alt="img"
                  />
                  New York
                </li>
                <li>
                  <Link to="/property-details">For Sell</Link>
                </li>
              </ul>
              <p>Lorem ipsum dolor constetur </p>
              <span className="price">$ 80,650.00</span>
            </div>
            <div className="product-meta-bottom style-2">
              <span>
                3 <span>Bedroom</span>
              </span>
              <span className="border-none">
                2 <span>Bathroom</span>
              </span>
              <span>
                1026 <span>sqft</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PropertyCard;
