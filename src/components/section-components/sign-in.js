import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    const $ = window.$;

    $("body").addClass("bg-gray");
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Admin = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/Admin/login", Admin)
      .then((res) => {
        alert(res.data);

        if (res.data === "Login Successful") window.location = "/sign-up";
      })
      .catch((res) => alert(res.data));
  }

  render() {
    return (
      <div className="signin-page-area pd-top-100 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <form className="signin-inner">
                <div className="row">
                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        required
                      />
                    </label>
                  </div>

                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12 mb-4">
                    <button
                      className="btn btn-base w-100"
                      onClick={this.onSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="col-12">
                    <a href="#">Forgotten Your Password</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
