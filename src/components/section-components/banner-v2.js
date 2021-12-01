import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="banner-area banner-area-2 banner-area-bg" style={{background: 'url('+publicUrl+'assets/img/banner/2.png)'}}>
			  <div className="main-search-area">
			    <div className="container">
			      <form className="main-search-inner pl-0 pr-0">
			        <div className="row no-gutters">
			          <div className="col-lg-3 col-md-4">
			            <div className="single-check-inner text-lg-center">
			              <label>
			                <input name="cl-one" type="radio" />
			                <span>Rent</span>
			              </label>
			              <label>
			                <input name="cl-one" type="radio" />
			                <span>Buy</span>
			              </label>
			              <label>
			                <input name="cl-one" type="radio" />
			                <span>Sold</span>
			              </label>
			            </div>
			          </div>
			          <div className="col-lg-5 col-md-4">
			            <div className="single-input-inner">
			              <input type="text" placeholder="Enter Keyword" />
			            </div>
			          </div>
			          <div className="col-md-2">
			            <div className="single-select-inner">
			              <select>
			                <option>Office</option>
			                <option value={1}>Office 1</option>
			                <option value={2}>Office 2</option>
			                <option value={3}>Office 3</option>
			              </select>
			            </div>
			          </div>
			          <div className="col-md-2">
			            <Link className="btn btn-base w-md-auto w-100" to="/property-grid">Search</Link>
			          </div>
			        </div>
			      </form>
			    </div>
			  </div>
			  <div className="container">
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
			  </div>
			</div>
			 

        }
}

export default BannerV2