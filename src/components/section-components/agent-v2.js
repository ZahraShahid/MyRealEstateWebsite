import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AgentV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="agent-area text-center pd-top-118 pd-bottom-90">
            <div className="container">
              <div className="section-title text-center">
                <h6>Meet Our Agent</h6>
                <h2>Our Best Agent</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-3">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/agent/4.png"} alt="img" />
                    </div> 
                    <div className="details">
                      <a className="phone-inner" href="#"><i className="fa fa-phone" /></a>
                      <h4>Sandara Mrikon</h4>
                      <h6>Estate Agent</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-3">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/agent/5.png"} alt="img" />
                    </div> 
                    <div className="details">
                      <a className="phone-inner" href="#"><i className="fa fa-phone" /></a>
                      <h4>Sandara Mrikon</h4>
                      <h6>Estate Agent</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-agent-wrap style-3">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/agent/6.png"} alt="img" />
                    </div> 
                    <div className="details">
                      <a className="phone-inner" href="#"><i className="fa fa-phone" /></a>
                      <h4>Sandara Mrikon</h4>
                      <h6>Estate Agent</h6>
                      <ul className="social-area style-2">
                        <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                      </ul>
                    </div>        
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
}

export default AgentV2