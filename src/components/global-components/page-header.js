import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Page_header extends Component {
  static propTypes = {
    headertitle: PropTypes.string,
    subheader: PropTypes.string,
  };

  render() {
    let HeaderTitle = this.props.headertitle;
    let publicUrl = process.env.PUBLIC_URL + "/";
    let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle;

    return (
      <div
        className="breadcrumb-area bg-overlay-2"
        style={{
          backgroundImage: 'url("' + publicUrl + 'assets/img/other/7.png")',
        }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="section-title text-center">
              <h2 className="page-title">{HeaderTitle}</h2>
              <ul className="page-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{Subheader}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page_header;
