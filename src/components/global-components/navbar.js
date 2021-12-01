import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div className="navbar-area navbar-area-1">
			  {/* navbar top start */}
			  <div className="navbar-top">
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-8 text-lg-left text-center">
			          <ul>
			            <li><p><img src={publicUrl+"assets/img/icon/location.png"} alt="img" /> 420 Love Sreet 133/2 flx City</p></li>
			            <li><p><img src={publicUrl+"assets/img/icon/phone.png"} alt="img" /> +(06) 017 800 628</p></li>
			            <li><p><img src={publicUrl+"assets/img/icon/envelope.png"} alt="img" />  info.contact@gmail.com</p></li>
			          </ul>
			        </div>
			        <div className="col-lg-4">
			          <ul className="topbar-right text-lg-right text-center">
			            <li>
			              <Link className="ml-0" to="/sign-up">Register</Link>
			              <Link to="/sign-in">Login</Link>
			            </li>
			            <li className="social-area">
			              <a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
			              <a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" aria-hidden="true" /></a>
			              <a href="https://www.instagram-plus.com/solverwp/"><i className="fab fa-instagram" aria-hidden="true" /></a>
			              <a href="https://www.skype.com/solverwp/"><i className="fab fa-skype" aria-hidden="true" /></a>
			              <a href="https://www.pinterest.com/solverwp/"><i className="fab fa-pinterest-p" aria-hidden="true" /></a>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			  <nav className="navbar navbar-expand-lg">
			    <div className="container nav-container">
			      <div className="responsive-mobile-menu">
			        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="icon-left" />
			          <span className="icon-right" />
			        </button>
			      </div>
			      <div className="logo">
			        <Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="img" /></Link>
			      </div>
			      <div className="nav-right-part nav-right-part-mobile">
			        <ul>
			          <li><a className="search" href="#"><i className="fa fa-search" /></a></li>
			          <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li>
			        </ul>
			      </div>
			      <div className="collapse navbar-collapse" id="dkt_main_menu">
			        <ul className="navbar-nav menu-open text-center">
			          <li className="menu-item-has-children current-menu-item">
			            <Link to="/">Home</Link>
			            <ul className="sub-menu">
			              <li><Link to="/">Home 01</Link></li>
			              <li><Link to="/home-v2">Home 02</Link></li>
			              <li><Link to="/home-v3">Home 03</Link></li>
			            </ul>
			          </li>
			          <li className="menu-item-has-children current-menu-item">
			            <Link to="/#">Property</Link>
			            <ul className="sub-menu">
			              <li><Link to="/property">Property</Link></li>
			              <li><Link to="/property-grid">Property Grid</Link></li>
			              <li><Link to="/property-details">Property Details</Link></li>
			            </ul>
			          </li>
			          <li className="menu-item-has-children current-menu-item">
			            <a href="#">Pages</a>
			            <ul className="sub-menu">
			              <li><Link to="/about">About</Link></li>
			              <li><Link to="/team">Team</Link></li>
			              <li><Link to="/sign-in">Sign In</Link></li>
			              <li><Link to="/sign-up">Sign Up</Link></li>
			              <li><Link to="/add-property">Add Property</Link></li>
			            </ul>
			          </li>
			          <li className="menu-item-has-children current-menu-item">
			            <a href="#">Blog</a>
			            <ul className="sub-menu">
			              <li><Link to="/blog">Blog</Link></li>
			              <li><Link to="/blog-details">Blog Details</Link></li>
			            </ul>
			          </li>
			          <li><Link to="/contact">Contact</Link></li>
			        </ul>
			      </div>
			      <div className="nav-right-part nav-right-part-desktop">
			        <ul>
			          <li><a className="search" href="#"><i className="fa fa-search" /></a></li>
			          <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li>
			        </ul>
			      </div>
			    </div>
			  </nav>
			</div>

        )
    }
}


export default Navbar