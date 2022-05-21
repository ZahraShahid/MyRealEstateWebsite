import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
	  		AboutUs: []
		}
  	}

	componentDidMount() {

  		const $ = window.$;

   		$( '.footer-area.style-two' ).removeClass( 'mg-top-100' );

   		axios.get('http://localhost:5000/AboutUs/')
   		.then(response => {
	  	if (response.data) {
		 this.setState({      
		   AboutUs: response.data
			});
	  	}
		})
		.catch((error) => {
	 		console.log(error);
		})
  	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="service-area">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Sell Property</a></h4>
			            <p>{this.state.AboutUs.SellProperty}</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/2.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Daily Apartment</a></h4>
			            <p>{this.state.AboutUs.DailyApartment}</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/3.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Family House</a></h4>
			            <p>{this.state.AboutUs.FamilyHouse}</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Service