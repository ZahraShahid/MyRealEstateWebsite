import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PropertyFilter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="propartes-area pd-top-118 pd-bottom-90">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>Meet Our Propartes</h6>
			      <h2>Our Propartes </h2>
			    </div>
			    <div className="mgd-tab-inner style-2 text-center"> 
			      <ul className="nav nav-tabs" id="myTab" role="tablist">
			        <li className="nav-item">
			          <a className="nav-link active" id="rent1-tab" data-toggle="tab" href="#rent1" role="tab" aria-controls="rent1" aria-selected="true">Rentals</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="sell1-tab" data-toggle="tab" href="#sell1" role="tab" aria-controls="sell1" aria-selected="false">Sales</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="sell2-tab" data-toggle="tab" href="#sell2" role="tab" aria-controls="sell2" aria-selected="false">Aparment</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="sell3-tab" data-toggle="tab" href="#sell3" role="tab" aria-controls="sell3" aria-selected="false">Villa</a>
			        </li>
			      </ul>
			    </div>
			    <div className="tab-content go-top" id="myTabContent">
			      <div className="tab-pane fade show active" id="rent1" role="tabpanel" aria-labelledby="rent1-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/2.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 80,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png" }alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/8.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 70,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 60,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 90,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 80,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 50,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="sell1" role="tabpanel" aria-labelledby="sell1-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 40,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/1.png" }alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 80,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 50,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 60,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/2.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 75,450.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/8.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 10,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="sell2" role="tabpanel" aria-labelledby="sell2-tab">
			        <div className="row">
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 20,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 40,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/2.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 60,350.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/8.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 80,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 62,150.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 80,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="sell3" role="tabpanel" aria-labelledby="sell3-tab">
			        <div className="row">
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/8.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 90,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 20,950.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png" }alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 37,150.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/2.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 80,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 22,650.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
			                <span>3 <span>Bedroom</span></span>
			                <span className="border-none">2 <span>Bathroom</span></span>
			                <span>1026 <span>sqft</span></span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4">
			            <div className="single-product-wrap style-3">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			              </div> 
			              <div className="product-details-inner">
			                <div className="row">
			                  <div className="col-7">
			                    <h4>$ 60,450.00</h4>
			                  </div>
			                  <div className="col-5 text-right">
			                    <ul className="meta-inner">
			                      <li><Link to="/property">BUY</Link></li>
			                      <li><Link to="/property">RENT</Link></li>
			                    </ul>
			                  </div>
			                </div>
			                <div className="row">
			                  <div className="col-10">
			                    <p><Link to="/property-details">Company Realty</Link></p>
			                  </div>
			                  <div className="col-2 align-self-center">
			                    <a href="#" className="wishlist">
			                      <i className="far fa-heart" />
			                    </a>
			                  </div>
			                </div>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York real estate</li>
			                  <li>
			                  </li></ul>
			              </div>
			              <div className="product-meta-bottom style-2">
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
			</div>
        }
}

export default PropertyFilter