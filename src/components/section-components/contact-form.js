import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
import axios from 'axios';

class ContactForm extends Component {

    constructor(props)
	  {
		  super(props);

      this.state = {
        About: []
		  }
    }

  componentDidMount() {

    const $ = window.$;

     $( '.footer-area.style-two' ).removeClass( 'mg-top-100' );

     axios.get('http://localhost:5000/About/')
     .then(response => {
        if (response.data) {
           this.setState({      
             About: response.data
            });
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="contact-page-area pd-top-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
                    <div className="contact-details-inner mng-box-shadow">
                      <h4>Address and contact information</h4>
                      <p> {this.state.About.description} </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="contact-single-list">
                            <h5>Pakistan Office</h5>
                            <ul>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> {this.state.About.location}</li>
                              </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-single-list">
                            <h5>Pakistan Office</h5>
                            <ul>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> {this.state.About.phoneNumber1}</li>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> {this.state.About.phoneNumber2}</li>
                              <li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> {this.state.About.phoneNumber3}</li> 
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="contact-single-date">
                            <p><strong>{this.state.About.days1}</strong> {this.state.About.timings1}</p>
                            <p><strong>{this.state.About.days2}</strong> {this.state.About.timings2}</p>
                            <p><strong>{this.state.About.days3} </strong> {this.state.About.timings3}</p>
                          </div>
                        </div>
                        <div className="col-md-6 align-self-center text-md-right">
                          <ul className="social-area style-3">
                            <li><a href={this.state.About.facebook}><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                            <li><a href={this.state.About.twitter}><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href={this.state.About.instagram}><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                            <li><a href={this.state.About.skype}><i className="fab fa-skype" aria-hidden="true" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                    <form>
                      <div className="row">
                        <div className="col-xl-6 col-md-6">
                          <div className="single-select-inner style-bg-border">
                            <select>
                              <option value={1}>General Information</option>
                              <option value={2}>General Information</option>
                              <option value={3}>General Information</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Subject" />
                          </label>
                        </div>
                        <div className="col-xl-12 col-lg-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Name" />
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Email" />
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label className="single-input-inner style-bg-border">
                            <input type="text" placeholder="Phone" />
                          </label>
                        </div>
                        <div className="col-12">
                          <label className="single-input-inner style-bg-border">
                            <textarea placeholder="Message" defaultValue={""} />
                          </label>
                        </div>
                        <div className="col-12 mb-4">
                          <button className="btn btn-base">Submit Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="contact-page-map mg-top-100">
                <iframe src={this.state.About.locationLink}/>
              </div>
            </div>

        }
}

export default ContactForm
