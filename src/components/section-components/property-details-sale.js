import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const PropertyDetailsSale = () => {
    const location = useLocation();
    const data = location.state;
    let publicUrl = process.env.PUBLIC_URL + "/";

    let [propertyData, getpropertyData] = useState("");

    useEffect(() => {
      getProperty();
    }, []);

    const getProperty = async () =>
      await axios
        .get(
          "http://localhost:5000/SalePropertyDetail/property-details-sale/" +
            data,
          {}
        )
        .then((res) => {
          const allPropertyData = res.data;
          getpropertyData(allPropertyData);
        });

    return (
      <div className="property-page-area pd-top-120 pd-bottom-90 ">
        <div className="container">
          <div className="property-details-top pd-bottom-70">
            <div className="property-details-top-inner">
              <div className="row">
                <div className="col-lg-7">
                  <h3>{propertyData.PropertyTitle}</h3>
                  <p>
                    <img
                      src={publicUrl + "assets/img/icon/location2.png"}
                      alt="img"
                    />{" "}
                    {propertyData.Address}{" "}
                  </p>
                  <ul>
                    <li>{propertyData.Bedrooms} Bedrooms</li>
                    <li>{propertyData.Bathrooms} Bathrooms</li>
                    <li>{propertyData.AreaSqFt} sqft</li>
                  </ul>
                </div>
                <div className="col-lg-5 text-lg-right">
                  <h4>Rs. {propertyData.Price}</h4>
                  <div className="btn-wrap">
                    <a className="btn btn-blue btn-sm" href="#">
                      BUILD
                    </a>
                    <a className="btn btn-base btn-sm" href="#">
                      SALE
                    </a>
                    <a className="btn btn-blue btn-sm" href="#">
                      RENT
                    </a>
                  </div>
                  <ul>
                    <li>
                      <img src={publicUrl + "assets/img/icon/1.png"} alt="img" />
                      {propertyData.DatePosted}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-thumbnail-wrapper">
              <div className="single-thumbnail-slider">
                <div className="slider-item">
                  <img
                    style={{ width: "100%" }}
                    src={propertyData.MainImage}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row go-top">
            <div className="col-lg-8">
              <div className="single-property-details-inner">
                <h4>{propertyData.TypeOfProperty}</h4>
                <p>{propertyData.Description} </p>
                <div className="single-property-grid">
                  <h4>Poperty Details</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>Bedrooms: {propertyData.Bedrooms}</li>
                        <li>Livingrooms: {propertyData.Livingrooms}</li>
                        <li>Type: {propertyData.TypeOfProperty}</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Bathrooms: {propertyData.Bathrooms}</li>
                        <li>Total Rooms: {propertyData.TotalRooms}</li>
                        <li>Year Built: {propertyData.YearBuilt}</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>Kitchens: {propertyData.Kitchens}</li>
                        <li>Area: {propertyData.AreaSqFt}</li>
                        <li>Owner: {propertyData.Owner}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Amenities</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Air Conditioner
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Fencing
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Internet
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Wardrobes
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          School
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Park
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          Dishwasher
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Floor Covering
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          Internet
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-property-grid">
                  <h4>Estate Location</h4>
                  <div className="property-map">
                    <iframe src={propertyData.PropertyMapLocation} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget-place">
                  <h5 className="widget-title">Places</h5>
                  <ul>
                    <li>
                      Lahore <span>26</span>
                    </li>
                    <li>
                      Islamabad <span>20</span>
                    </li>
                    <li>
                      Multan <span>21</span>
                    </li>
                    <li>
                      Karachi <span>31</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tags">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tagcloud">
                    <Link to="/">Real Estate</Link>
                    <Link to="/">Business</Link>
                    <Link to="/">House</Link>
                    <Link to="/">Floors</Link>
                    <Link to="/">Apartment</Link>
                    <Link to="/">Planing</Link>
                    <Link to="/">Location</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PropertyDetailsSale;
