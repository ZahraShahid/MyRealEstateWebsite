import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Footer_v2 extends Component {

	constructor(props)
	{
		super(props);
		
     	this.state = {
        	ContactUs: []
		}
    }

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

		axios.get('http://localhost:5000/ContactUs/')
		.then(response => {
		   if (response.data) {
			  this.setState({      
				ContactUs: response.data
			   });
		   }
		 })
		 .catch((error) => {
		   console.log(error);
		 })
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
		<footer className="footer-area style-two mg-top-100 go-top" style={{background: 'url('+publicUrl+'assets/img/other/1.png)'}}>
		  <div className="footer-top">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-6 col-md-4">
		          <a href="/"><img src={publicUrl+"assets/img/logo.png"} alt="img" /></a>
		        </div>
		        <div className="col-lg-6 col-md-8 text-md-right mt-3 mt-md-0">
		          <ul className="social-area">
		            <li><a href={this.state.ContactUs.facebook}><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
		            <li><a href={this.state.ContactUs.twitter}><i className="fab fa-twitter" aria-hidden="true" /></a></li>
		            <li><a href={this.state.ContactUs.instagram}><i className="fab fa-instagram" aria-hidden="true" /></a></li>
		            <li><a href={this.state.ContactUs.skype}><i className="fab fa-skype" aria-hidden="true" /></a></li>
		           </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="footer-middle">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-4 col-md-6">
		          <div className="widget widget_about">
		            <h4 className="widget-title">Contact Us</h4>
		            <div className="details">
		              <p><i className="fas fa-map-marker-alt" /> {this.state.ContactUs.location}</p>
		              <p><i className="fas fa-phone-volume" /> {this.state.ContactUs.phoneNumber1}</p>
		              <p><i className="fas fa-envelope" /> {this.state.ContactUs.email}</p>
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-6">
		          <div className="widget widget_nav_menu">
		            <h4 className="widget-title">Quick link</h4>
		            <ul>
		              <li><Link to="/about">About Us</Link></li>
		              <li><Link to="/property">Property</Link></li>
		              <li><Link to="/add-property">Add Property</Link></li>
		              <li><Link to="/contact">Contact Us</Link></li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-6">
		          <div className="widget widget_nav_menu">
		            <h4 className="widget-title">Explore</h4>
		            <ul>
		              <li><Link to="/property-grid">- For Sale Properties</Link></li>
		              <li><Link to="/property-grid">- For Rent Properties</Link></li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-6">
		          <div className="widget widget_subscribe">
		            <h4 className="widget-title">Newslatter</h4>
		            <div className="details">
		              <p>Lorem ipsum dolor sit amet,</p>
		              <div className="footer-subscribe-inner">
		                <input type="text" placeholder="Your Mail" />
		                <a className="btn btn-base" href="#">Subscribe</a>
		              </div> 
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div className="footer-bottom">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-6 align-self-center">
		          <p>All Rights Reserved</p>
		        </div>
		        <div className="col-lg-6 text-lg-right">
		          <ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		            <li>
		              <Link to="/about">About</Link>
		            </li>
		            <li>
		              <Link to="/contact">Contact</Link>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		</footer>


        )
    }
}


export default Footer_v2