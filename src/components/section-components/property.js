import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Property extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="propartes-area pd-top-118 pd-bottom-90 ">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>Our Propartes</h6>
			      <h2>Our Propartes </h2>
			    </div>
			    <div className="mgd-tab-inner text-center"> 
			      <ul className="nav nav-tabs" id="myTab" role="tablist">
			        <li className="nav-item">
			          <a className="nav-link active" id="rent1-tab" data-toggle="tab" href="#rent1" role="tab" aria-controls="rent1" aria-selected="true">Rent</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="sell1-tab" data-toggle="tab" href="#sell1" role="tab" aria-controls="sell1" aria-selected="false">Sell</a>
			        </li>
			      </ul>
			    </div>
			    <div className="tab-content go-top" id="myTabContent">
			      <div className="tab-pane fade show active" id="rent1" role="tabpanel" aria-labelledby="rent1-tab">
			        <div className="row go-top">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
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
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Daily Apartment</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/2.png" }alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/2.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Gorgeous Villa</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
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
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Daily Property</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/4.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/4.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Farm House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png" }alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/5.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Beach Side House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/6.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/6.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Gorgeous Hotel</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="sell1" role="tabpanel" aria-labelledby="sell1-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/4.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/4.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Farm House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/5.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Beach Side House</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/6.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/6.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Gorgeous Hotel</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
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
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Daily Apartment</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/2.png"} alt="img" />
			                <div className="product-wrap-details">
			                  <div className="media">
			                    <div className="author">
			                      <img src={publicUrl+"assets/img/author/2.png"} alt="img" />           
			                    </div>
			                    <div className="media-body">
			                      <h6><Link to="/property">Owner Name</Link></h6>
			                      <p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />New York real estate </p>
			                    </div>
			                    <a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
			                  </div>
			                </div> 
			              </div> 
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Gorgeous Villa</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
			              </div>         
			            </div>
			          </div>
			          <div className="col-lg-4 col-md-6">
			            <div className="single-product-wrap style-bottom">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/project/3.png"} alt="img" />
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
			              <div className="product-details-inner">
			                <h4><Link to="/property-details">Daily Property</Link></h4>
			                <ul className="meta-inner">
			                  <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />New York</li>
			                  <li><Link to="/property">For Sell</Link></li>
			                </ul>
			                <p>Lorem ipsum dolor consectetur iicing elit, sed do eius Lorem ipsum dolo amet, costur adipisicing eiusmod.</p>
			              </div>
			              <div className="product-meta-bottom">
			                <span className="price">$ 80,650.00</span>
			                <span>For sale</span>
			                <span>1 year ago</span>
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

export default Property