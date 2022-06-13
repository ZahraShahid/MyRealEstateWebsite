import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PropertyCardRent = ({
  PropertyId,
  PropertyTitle,
  PropertyTagline,
  Address,
  City,
  Price, //Needs to be formatted or changed
  MainImage,
  Bedrooms,
  Bathrooms,
  AreaSqFt,
  Owner,
}) => {
  // Like button to be implmented
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div className="col-lg-4 col-md-6">
        <Link to="/property-details-rent" state={PropertyId}>
          <div className="single-product-wrap style-2">
            <div className="thumb">
              <img
                style={{ width: "330px", height: "248px" }}
                src={MainImage}
                alt="img"
              />
              <div className="product-wrap-details">
                <div className="media">
                  <div className="media-body">
                    <h6>
                      <Link to="/property-details-rent" state={PropertyId}>
                        {Owner}
                      </Link>
                    </h6>
                    <p>
                      <img
                        src={publicUrl + "assets/img/icon/location-alt.png"}
                        alt="img"
                      />
                      {Address}{" "}
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
                <Link to="/property-details-rent">{PropertyTitle}</Link>
              </h4>
              <ul className="meta-inner">
                <li>
                  <img
                    src={publicUrl + "assets/img/icon/location2.png"}
                    alt="img"
                  />
                  {City}
                </li>
                <li>
                  <Link to="/property-details-rent">For Rent</Link>
                </li>
              </ul>
              <p>{PropertyTagline}</p>
              <span className="price">$ {Price}</span>
            </div>
            <div className="product-meta-bottom style-2">
              <span>
                {Bedrooms} <span>Bedrooms</span>
              </span>
              <span className="border-none">
                {Bathrooms} <span>Bathrooms </span>
              </span>
              <span>
                {" "}
                {AreaSqFt} <span>sqft</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

PropertyCardRent.propTypes = {
  PropertyId: PropTypes.string.isRequired,
  PropertyTitle: PropTypes.string.isRequired,
  PropertyTagline: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  City: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  MainImage: PropTypes.string.isRequired,
  Bedrooms: PropTypes.number,
  Bathrooms: PropTypes.number,
  AreaSqFt: PropTypes.number.isRequired,
  Owner: PropTypes.string.isRequired,
};

export default PropertyCardRent;
