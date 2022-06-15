import React from "react";
import PropTypes from "prop-types";

const ImagesProfile = ({ image }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-product-wrap style-2">
        <div className="thumb">
          <img 
          style={{ width: "290px", height: "220px" }}
          src={image} alt="img" />
        </div>
      </div>
    </div>
  );
};
ImagesProfile.propTypes = {
  image: PropTypes.string.isRequired,
};
export default ImagesProfile;
