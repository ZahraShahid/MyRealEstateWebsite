import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="banner-area banner-area-3 banner-area-bg" style={{background: 'url('+publicUrl+'assets/img/banner/3.png)'}}>
			  <div className="main-search-area">
			    <div className="container">
			      <form className="main-search-inner">
			        <div className="row custom-gutters-10">
			          <div className="col-lg-5 col-sm-6">
			            <div className="single-input-inner">
			              <input type="text" placeholder="Enter Keyword" />
			            </div>
			          </div>
			          <div className="col-lg-3 col-sm-6">
			            <div className="single-check-inner bg-white text-center">
			              <label>
			                <input defaultValue={1} name="cl-one" type="radio" />
			                <span>Rent</span>
			              </label>
			              <label>
			                <input defaultValue={1} name="cl-one" type="radio" />
			                <span>Buy</span>
			              </label>
			              <label>
			                <input defaultValue={1} name="cl-one" type="radio" />
			                <span>Sold</span>
			              </label>
			            </div>
			          </div>
			          <div className="col-lg-2 col-sm-6 mt-lg-0 mt-md-2 mt-2">
			            <div className="single-select-inner">
			              <select>
			                <option>Office</option>
			                <option value={1}>Office 1</option>
			                <option value={2}>Office 2</option>
			                <option value={3}>Office 3</option>
			              </select>
			            </div>
			          </div>
			          <div className="col-lg-2 col-sm-6 mt-lg-0 mt-md-2 mt-0">
			            <a className="btn btn-white-border w-100" href="#"><i className="fa fa-search mr-1" /> Search</a>
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
			  <div className="container">
			    <div className="banner-slider owl-carousel">
			      <div className="item">
			        <div className="banner-area-inner">
			          <div className="row justify-content-center">
			            <div className="col-lg-8">
			              <div className="banner-inner text-center">
			                <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,</p>
			                <div className="line" />
			                <h2>The Best Way To Find Your Perfect Home</h2>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="banner-meta-inner">
			          <h4>Mordan Appertment In <br /> The City Center</h4>
			          <img src={publicUrl+"assets/img/icon/location.png"} alt="img" />
			          <span>420 Love Sreet 133/2 Mirpur City, Dhaka</span>
			          <div className="btn btn-blue">$ 80,650.00</div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="banner-area-inner">
			          <div className="row justify-content-center">
			            <div className="col-lg-8">
			              <div className="banner-inner text-center">
			                <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,</p>
			                <div className="line" />
			                <h2>The Best Way To Find Your Perfect Home</h2>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="banner-meta-inner">
			          <h4>Mordan Appertment In <br /> The City Center</h4>
			          <img src={publicUrl+"assets/img/icon/location.png"} alt="img" />
			          <span>420 Love Sreet 133/2 Mirpur City, Dhaka</span>
			          <div className="btn btn-blue">$ 80,650.00</div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="banner-area-inner">
			          <div className="row justify-content-center">
			            <div className="col-lg-8">
			              <div className="banner-inner text-center">
			                <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet,</p>
			                <div className="line" />
			                <h2>The Best Way To Find Your Perfect Home</h2>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="banner-meta-inner">
			          <h4>Mordan Appertment In <br /> The City Center</h4>
			          <img src={publicUrl+"assets/img/icon/location.png"} alt="img" />
			          <span>420 Love Sreet 133/2 Mirpur City, Dhaka</span>
			          <div className="btn btn-blue">$ 80,650.00</div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default BannerV3