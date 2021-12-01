import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="product-area pd-top-118 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>We are offring the best real estate</h6>
			      <h2>Best House For You</h2>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/1.png"} alt="img" />
			            <div className="btn-area">
			              <Link className="btn btn-base btn-sm" to="/property">BUY</Link>
			              <Link className="btn btn-blue btn-sm" to="/property">RENT</Link>
			            </div>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="author">
			                <img src={publicUrl+"assets/img/author/1.png"} alt="img" />                                    
			              </div>
			              <div className="media-body">
			                <h6><Link to="/property">Owner Name</Link></h6>
			                <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			              </div>
			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			            </div>
			          </div>          
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/2.png"} alt="img" />
			            <div className="btn-area">
			              <Link className="btn btn-base btn-sm" to="/property">BUY</Link>
			              <Link className="btn btn-blue btn-sm" to="/property">RENT</Link>
			            </div>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="author">
			                <img src={publicUrl+"assets/img/author/2.png"} alt="img" />                                    
			              </div>
			              <div className="media-body">
			                <h6><Link to="/property">Owner Name</Link></h6>
			                <p><img src={publicUrl+"assets/img/icon/location-alt.png" }alt="img" />New York real estate </p>
			              </div>
			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			            </div>
			          </div>          
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/product/3.png"} alt="img" />
			            <div className="btn-area">
			              <Link className="btn btn-base btn-sm" to="/property">BUY</Link>
			              <Link className="btn btn-blue btn-sm" to="/property">RENT</Link>
			            </div>
			          </div>
			          <div className="product-wrap-details">
			            <div className="media">
			              <div className="author">
			                <img src={publicUrl+"assets/img/author/3.png"} alt="img" />                                    
			              </div>
			              <div className="media-body">
			                <h6><Link to="/property">Owner Name</Link></h6>
			                <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			              </div>
			              <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			            </div>
			          </div>          
			        </div>
			      </div>     
			    </div>
			  </div>
			</div>
        }
}

export default ProductV3