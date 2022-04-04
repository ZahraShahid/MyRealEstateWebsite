import React, { Component } from 'react';
import axios from 'axios';
class About extends Component {

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

    return <div className="about-area bg-gray pd-top-120 pd-bottom-120">
              <div className="container">
                <div className="single-about-inner about-line-right bg-white">
                  <div className="row no-gutter">
                    <div className="col-lg-4 order-lg-12">
                      <div className="thumb" style={{background: 'url('+publicUrl+'assets/img/other/2.png)'}} />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <div className="details">
                        <div className="section-title mb-4">
                          <h6> {this.state.AboutUs.title1}</h6>
                          <h2> {this.state.AboutUs.title2}</h2>
                          <p> {this.state.AboutUs.description}</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>{this.state.AboutUs.list1}</li>
                              <li>{this.state.AboutUs.list2}</li>
                              <li> {this.state.AboutUs.list3}</li>
                              <li>{this.state.AboutUs.list4}</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li> {this.state.AboutUs.list5}</li>
                              <li>{this.state.AboutUs.list56}</li>
                              { <li>{this.state.AboutUs.list7}</li> }
                            </ul>
                          </div>
                        </div>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About;