import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-1 banner-area-bg" style={{background: 'url('+publicUrl+'assets/img/banner/1.png)'}}>
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
			        <div className="col-lg-8 mt-4">
			          <form className="main-search-inner">
			            <div className="row custom-gutters-10">
			              <div className="col-md-3">
			                <div className="single-select-inner">
			                  <select>
			                    <option>Location</option>
			                    <option value={1}>Location 1</option>
			                    <option value={2}>Location 2</option>
			                    <option value={3}>Location 3</option>
			                  </select>
			                </div>
			              </div>
			              <div className="col-md-3">
			                <div className="single-select-inner">
			                  <select>
			                    <option>Property</option>
			                    <option value={1}>Property 1</option>
			                    <option value={2}>Property 2</option>
			                    <option value={3}>Property 3</option>
			                  </select>
			                </div>
			              </div>
			              <div className="col-md-3">
			                <div className="single-select-inner">
			                  <select>
			                    <option>Price</option>
			                    <option value={1}>Price</option>
			                    <option value={2}>Price</option>
			                    <option value={3}>Price</option>
			                  </select>
			                </div>
			              </div>
			              <div className="col-md-3">
			                <Link className="btn btn-base w-100" to="/property-grid"><i className="fa fa-search mr-1" /> Search</Link>
			              </div>
			            </div>
			          </form>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Banner