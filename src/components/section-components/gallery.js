import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="agent-area text-center pd-top-118 pd-bottom-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			           </div>
                </div>
              </div>
            </div>
          </div>

        }
}

export default Gallery