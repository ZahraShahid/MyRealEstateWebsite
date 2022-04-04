import React, { Component } from "react";
import axios from "axios";
class TestimonialV3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AboutUs: [],
    };
  }

  componentDidMount() {
    const $ = window.$;

    $(".footer-area.style-two").removeClass("mg-top-100");

    axios
      .get("http://localhost:5000/AboutUs/")
      .then((response) => {
        if (response.data) {
          this.setState({
            AboutUs: response.data,
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
      <div
        className="testimonial-area pd-top-118 pd-bottom-120 bg-overlay"
        style={{ background: "url(" + publicUrl + "assets/img/bg/2.png)" }}
      >
        <div className="bg-overlay-wrap">
          <div className="container">
            <div className="section-title style-white text-center">
              <h6> {this.state.AboutUs.testimonial} </h6>
              <h2>{this.state.AboutUs.clientSay}</h2>
              <p>{this.state.AboutUs.line1} </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="testimonial-slider-1 owl-carousel">
                  <div className="item">
                    <div className="single-testimonial-inner pl-lg-5 pr-lg-5 text-center">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/testimonial/quote.png"}
                          alt="img"
                        />
                      </div>
                      <div className="details">
                        <p>“ {this.state.AboutUs.say1} ’’ </p>
                        <h6 className="name">
                          {this.state.AboutUs.ClientName1}
                        </h6>
                        <span className="designation">
                          {this.state.AboutUs.ClientPosition1}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-testimonial-inner pl-lg-5 pr-lg-5 text-center">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/testimonial/quote.png"}
                          alt="img"
                        />
                      </div>
                      <div className="details">
                        <p>“ {this.state.AboutUs.say2}’’</p>
                        <h6 className="name">
                          {this.state.AboutUs.ClientName2}
                        </h6>
                        <span className="designation">
                          {this.state.AboutUs.ClientPosition2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialV3;
