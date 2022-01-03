import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
class OfficeMap extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="agent-area text-center pd-top-118 pd-bottom-118">
            <div className="container">
                <div className="single-product-wrap style-2">
			         <div className="thumb">
			            <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			            </div>        
			        </div>
            </div>
          </div>

        }
}

export default OfficeMap;