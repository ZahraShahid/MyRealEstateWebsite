import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'; 
import axios from 'axios';
import link from 'react-router-dom';
import PropTypes from 'prop-types';

const MapsProfile = ({
    image,
    link
  }) => {
      var imagelink=link;
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <a href={imagelink}><i  aria-hidden="true" />
        <div className="single-product-wrap style-2">
            
        <div className="thumb">
        
        <img src={image} alt="img" />
        </div>        
       </div>
    
        </a>
          
        
        );
    };
    MapsProfile.propTypes = {
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        
      };
      export default MapsProfile;