import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="testimonial-area bg-overlay pd-top-118 pd-bottom-120 bg-overlay" style={{background: 'url(assets/img/bg/2.png)'}}>
			  <div className="container">
			    <div className="section-title style-white text-center">
			      <h6>Our Testomonial </h6>
			      <h2>What Client Say</h2>
			      <p>Lorem ipsum dolor  amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, </p>
			    </div>
			    <div className="testimonial-slider-2 owl-carousel text-center">
			      <div className="item">
			        <div className="single-testimonial-inner style-three text-center">
			          <div className="thumb main-thumb">
			            <img src={publicUrl+"assets/img/testimonial/1.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h6 className="name">Sarif Jaya Miprut</h6>
			            <span className="designation">Guest</span>
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
			            <div className="rating-inner">
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="far fa-star" aria-hidden="true" />
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-testimonial-inner style-three text-center">
			          <div className="thumb main-thumb">
			            <img src={publicUrl+"assets/img/testimonial/3.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h6 className="name">Sarif Jaya Miprut</h6>
			            <span className="designation">Guest</span>
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
			            <div className="rating-inner">
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="far fa-star" aria-hidden="true" />
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-testimonial-inner style-three text-center">
			          <div className="thumb main-thumb">
			            <img src={publicUrl+"assets/img/testimonial/4.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h6 className="name">Sarif Jaya Miprut</h6>
			            <span className="designation">Guest</span>
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
			            <div className="rating-inner">
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="fas fa-star" />
			              <i className="far fa-star" aria-hidden="true" />
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default TestimonialV2