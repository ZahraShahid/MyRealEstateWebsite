import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const AgentProfile = ({
  image,
  name,
  role,
  facebook,
  linkedIn,
  instagram,
  twitter
}) => {

    return (
        
    <div className="col-lg-4 col-md-6">
    <div className="single-agent-wrap style-2 text-center">
      <div className="thumb">
        <img src={image }alt="img" />
      </div> 

      <div className="details">
        <h4>{name}</h4>
        <h6>{role}</h6>
        <ul className="social-area style-2">
          <li><a href={facebook}><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
          <li><a href={linkedIn}><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
          <li><a href={instagram}><i className="fab fa-instagram" aria-hidden="true" /></a></li>
          <li><a href={twitter}><i className="fab fa-twitter" aria-hidden="true" /></a></li>
        </ul>
      </div>   

    </div>
  </div>

    );
};

AgentProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

export default AgentProfile;