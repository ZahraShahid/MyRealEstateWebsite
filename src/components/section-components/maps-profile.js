import React from 'react';
import PropTypes from 'prop-types';

const MapsProfile = ({
    image,
    link
  }) => {
      var imagelink=link;
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