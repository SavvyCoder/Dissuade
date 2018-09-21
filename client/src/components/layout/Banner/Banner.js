import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="dark-overlay banner-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center banner-text">
                <h1 className="display-3 mb-4">Dissuade</h1>
                <p className="lead">
                  {" "}
                  A social media site for well-constructed, rigorously verified,
                  and properly sourced opinions
                </p>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-info mr-2 btn-custom"
                >
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-info btn-custom">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
