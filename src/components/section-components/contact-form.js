import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ContactUs: [],
    };
  }

  componentDidMount() {
    const $ = window.$;

    $(".footer-area.style-two").removeClass("mg-top-100");

    axios
      .get("http://localhost:5000/ContactUs/")
      .then((response) => {
        if (response.data) {
          this.setState({
            ContactUs: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="contact-page-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
              <div className="contact-details-inner mng-box-shadow">
                <h4>Address and contact information</h4>
                <p> {this.state.ContactUs.description} </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-single-list">
                      <h5>Pakistan Office</h5>
                      <ul>
                        <li>
                          <img
                            src={publicUrl + "assets/img/icon/location2.png"}
                            alt="img"
                          />{" "}
                          {this.state.ContactUs.location}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-single-list">
                      <h5>Pakistan Office</h5>
                      <ul>
                        <li>
                          <img
                            src={publicUrl + "assets/img/icon/location2.png"}
                            alt="img"
                          />{" "}
                          {this.state.ContactUs.phoneNumber1}
                        </li>
                        <li>
                          <img
                            src={publicUrl + "assets/img/icon/location2.png"}
                            alt="img"
                          />{" "}
                          {this.state.ContactUs.phoneNumber2}
                        </li>
                        <li>
                          <img
                            src={publicUrl + "assets/img/icon/location2.png"}
                            alt="img"
                          />{" "}
                          {this.state.ContactUs.phoneNumber3}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="contact-single-date">
                      <p>
                        <strong>{this.state.ContactUs.days1}</strong>{" "}
                        {this.state.ContactUs.timings1}
                      </p>
                      <p>
                        <strong>{this.state.ContactUs.days2}</strong>{" "}
                        {this.state.ContactUs.timings2}
                      </p>
                      <p>
                        <strong>{this.state.ContactUs.days3} </strong>{" "}
                        {this.state.ContactUs.timings3}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center text-md-right">
                    <ul className="social-area style-3">
                      <li>
                        <a href={this.state.ContactUs.facebook}>
                          <i className="fab fa-facebook-f" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href={this.state.ContactUs.twitter}>
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href={this.state.ContactUs.instagram}>
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href={this.state.ContactUs.skype}>
                          <i className="fab fa-skype" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <form
                action={"https://formsubmit.co/" + this.state.ContactUs.email}
                method="POST"
              >
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="single-select-inner style-bg-border">
                      <select>
                        <option value={1}>General Information</option>
                        <option value={2}>Query</option>
                        <option value={3}>Request Appointment</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <label className="single-input-inner style-bg-border">
                      <input type="text" name="Subject" placeholder="Subject" />
                    </label>
                  </div>
                  <div className="col-xl-12 col-lg-6">
                    <label className="single-input-inner style-bg-border">
                      <input type="text" name="Name" placeholder="Name" />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label className="single-input-inner style-bg-border">
                      <input type="text" name="Email" placeholder="Email" />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label className="single-input-inner style-bg-border">
                      <input type="text" name="Phone" placeholder="Phone" />
                    </label>
                  </div>
                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <textarea
                        name="Message"
                        placeholder="Message"
                        defaultValue={""}
                      />
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
          <iframe src={this.state.ContactUs.locationLink} />
        </div>
      </div>
    );
  }
}

export default ContactForm;
