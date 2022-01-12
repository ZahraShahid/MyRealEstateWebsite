import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
import axios from 'axios';
import PropTypes from 'prop-types';

const ImagesProfile = ({
    image
  }) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        
        <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-2">
			            <div className="thumb">
			              <img src={image} alt="img" />
			            </div>        
			           </div>
                </div>
    
        );
    };
    ImagesProfile.propTypes = {
        image: PropTypes.string.isRequired,
        
      };
      export default ImagesProfile;