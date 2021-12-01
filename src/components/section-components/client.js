import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
          <div className="client-area client-area-pd bg-overlay pd-top-118" style={{background: 'url('+publicUrl+'assets/img/other/1.png)'}}>
            <div className="container">
              <div className="row justify-content-center text-lg-left text-center">
                <div className="col-lg-9">
                  <div className="section-title style-white mb-0">
                    <h6>Buy Or Sell</h6>
                    <h2>Find Best Place For Leaving</h2>
                    <p>Lorem ipsum dolor  amet, consecteLorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt dolore magna consecteLorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                  </div>
                </div>
                <div className="col-lg-3 align-self-end text-lg-right mt-4 mt-lg-0 go-top">
                  <Link className="btn btn-base" to="/add-property">SUBMIT</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="client-slider bg-main style-two owl-carousel">
              <div className="item">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/client/3.png"} alt="img" />
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/client/4.png"} alt="img" />
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/client/5.png"} alt="img" />
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default Client