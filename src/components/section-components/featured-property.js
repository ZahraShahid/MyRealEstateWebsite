import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturedProperty extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="featured-area pd-top-118 pd-bottom-90">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>Our Exclusives</h6>
			      <h2>Featured Properties</h2>
			    </div>
			    <div className="row">
			      <div className="col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/13.png"} alt="img" />
			            <div className="btn-area">
			              <Link className="btn btn-base btn-sm" to="/property">BUY</Link>
			              <Link className="btn btn-base btn-sm" to="/property">RENT</Link>
			            </div>
			          </div> 
			          <div className="product-wrap-details">
			            <div className="product-details-inner p-0">
			              <h4>$ 80,650.00</h4>
			              <div className="row">
			                <div className="col-10">
			                  <ul className="meta-inner mb-0">
			                    <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                    <li>
			                    </li></ul>
			                </div>
			                <div className="col-2 align-self-center">
			                  <a href="#" className="wishlist">
			                    <i className="far fa-heart" />
			                  </a>
			                </div>
			              </div>
			            </div>
			            <div className="product-meta-bottom style-2 pl-0 pr-0">
			              <span>3 <span>Bedroom</span></span>
			              <span className="border-none">2 <span>Bathroom</span></span>
			              <span>1026 <span>sqft</span></span>
			            </div>
			          </div>         
			        </div>
			      </div>
			      <div className="col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/14.png"} alt="img" />
			            <div className="btn-area">
			              <Link className="btn btn-base btn-sm" to="/property">BUY</Link>
			              <Link className="btn btn-base btn-sm" to="/property">RENT</Link>
			            </div>
			          </div> 
			          <div className="product-wrap-details">
			            <div className="product-details-inner p-0">
			              <h4>$ 80,650.00</h4>
			              <div className="row">
			                <div className="col-10">
			                  <ul className="meta-inner mb-0">
			                    <li><img src={publicUrl+"assets/img/icon/location2.png" }alt="img" />New York real estate</li>
			                    <li>
			                    </li></ul>
			                </div>
			                <div className="col-2 align-self-center">
			                  <a href="#" className="wishlist">
			                    <i className="far fa-heart" />
			                  </a>
			                </div>
			              </div>
			            </div>
			            <div className="product-meta-bottom style-2 pl-0 pr-0">
			              <span>3 <span>Bedroom</span></span>
			              <span className="border-none">2 <span>Bathroom</span></span>
			              <span>1026 <span>sqft</span></span>
			            </div>
			          </div>         
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default FeaturedProperty