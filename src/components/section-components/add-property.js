import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AddProperty extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="add-property-area pd-top-120">
              <div className="container">
                <form>
                  <div className="btn btn-base hover-none">Basic Information</div>
                  <div className="property-form-grid">
                    <div className="row">
                      <div className="col-12">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Proparty Title</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Proparty Title</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Proparty Title</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <div className="single-select-inner style-bg-border">
                          <span className="label">Beds</span>
                          <select>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-select-inner style-bg-border">
                          <span className="label">Baths</span>
                          <select>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="avatar-upload-input text-center">
                          <img src={publicUrl+"assets/img/icon/upload.png"} alt="img" />
                          <h2>Upload your photo</h2>
                          <p>Its must be a clean photo</p>
                          <div className="avatar-edit-input">
                            <input className="btn btn-base" type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label className="btn btn-base" htmlFor="imageUpload">Click here to Upload</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Address</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">City</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">State</span>
                          <input type="text" />
                        </label>
                      </div>
                      <div className="col-md-6">
                        <label className="single-input-inner style-bg-border">
                          <span className="label">Zip Code</span>
                          <input type="text" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="btn btn-base hover-none">Contact Details</div>
                  <div className="property-form-grid">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="single-input-inner style-bg-border">
                          <input type="text" placeholder="Name" />
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label className="single-input-inner style-bg-border">
                          <input type="text" placeholder="Email" />
                        </label>
                      </div>
                      <div className="col-md-4">
                        <label className="single-input-inner style-bg-border">
                          <input type="text" placeholder="Phone" />
                        </label>
                      </div>
                      <div className="col-12">
                        <label className="single-input-inner style-bg-border">
                          <textarea placeholder="Description" defaultValue={""} />
                        </label>
                      </div>
                      <div className="col-12 text-center mb-4">
                        <button className="btn btn-base">Submit Now</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

        }
}

export default AddProperty