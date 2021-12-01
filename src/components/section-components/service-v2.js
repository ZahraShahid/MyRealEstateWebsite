import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="service-area bg-gray">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-service-wrap style-2" style={{backgroundImage: 'url(assets/img/service/01.png)'}}>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Sell Poparty</a></h4>
			            <p>Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-service-wrap style-2" style={{backgroundImage: 'url(assets/img/service/02.png)'}}>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/2.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Daily Apartment</a></h4>
			            <p>Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-service-wrap style-2 mb-0" style={{backgroundImage: 'url(assets/img/service/03.png)'}}>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/3.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Family House</a></h4>
			            <p>Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default ServiceV2