import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PropertyGrid extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-page-area pt-5 go-top">
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
			                  <button><i className="la la-search" /></button>
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
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/15.png" }alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Daily Apartment</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  constetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/16.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Family House</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  conseetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/9.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Beach House</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  consectur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/17.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Hotel Apartment</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png" } alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  conctetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Daily Apartment</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  conctetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/4.png" }alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Villa House</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  constetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/6.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Sunshine Place</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  consetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Sunny Place</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  consetur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/9.png"} alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                  <img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
			                </div>
			                <div className="media-body">
			                  <h6><Link to="/property-details">Owner Name</Link></h6>
			                  <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                </div>
			                <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
			            <h4><Link to="/property-details">Beach House</Link></h4>
			            <ul className="meta-inner">
			              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			              <li><Link to="/property-details">For Sell</Link></li>
			            </ul>
			            <p>Lorem ipsum dolor  consectur </p>
			            <span className="price">$ 80,650.00</span>
			          </div>
			          <div className="product-meta-bottom style-2">
			            <span>3 <span>Bedroom</span></span>
			            <span className="border-none">2 <span>Bathroom</span></span>
			            <span>1026 <span>sqft</span></span>
			          </div>         
			        </div>
			      </div>
			      <div className="pagination-area text-center mt-4">
			        <ul className="pagination">
			          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
			          <li className="page-item active"><a className="page-link" href="#">1</a></li>
			          <li className="page-item"><a className="page-link" href="#">2</a></li>
			          <li className="page-item"><a className="page-link" href="#">3</a></li>
			          <li className="page-item"><a className="page-link" href="#">...</a></li>
			          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default PropertyGrid