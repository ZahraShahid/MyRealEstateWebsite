import React, { Component } from "react";
import PropertyCard from "./property-card";
import axios from "axios";

class PropertyGridForSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SaleProperties: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/RentPropertyDetail/")
      .then((response) => {
        if (response.data) {
          this.setState({
            SaleProperties: response.data,
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
 

  render() {
    return (
      <div className="blog-page-area pt-5 go-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="product-search-inner bg-main">
                <div className="row custom-gutters-20">
                  <div className="col-md-3 align-self-center">
                    <h5>21 Properties</h5>
                  </div>
                  <div className="col-md-6 mt-2 mt-md-0">
                    <div className="widget-search">
                      <div className="single-search-inner">
                        <input type="text" placeholder="Search your keyword" />
                        <button>
                          <i className="la la-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mt-2 mt-md-0 align-self-center">
                    <div className="single-select-inner">
                      <select>
                        <option value={1}>Sort By</option>
                        <option value={2}>Sort By</option>
                        <option value={3}>Sort By</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />

            <div className="pagination-area text-center mt-4">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="la la-angle-double-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="la la-angle-double-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyGridForSale;
