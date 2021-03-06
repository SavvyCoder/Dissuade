import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import Banner from "./Banner/Banner.js";
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts.js";
import ParallaxCenter from "./ParallaxCenter/ParallaxCenter.js";
import PictureShowcase from "./PictureShowcase/PictureShowcase.js";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div id="landing">
        <Banner />
        <FeaturedPosts />
        <ParallaxCenter />
        <PictureShowcase />
      </div>
      // <div className="landing">
      //   <div className="dark-overlay landing-inner text-light">
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-md-12 text-center">
      //           <h1 className="display-3 mb-4">Dissuade</h1>
      //           <p className="lead">
      //             {" "}
      //             A social media site for well-constructed, rigorously verified,
      //             and properly sourced opinions
      //           </p>
      //           <hr />
      //           <Link to="/register" className="btn btn-lg btn-info mr-2">
      //             Sign Up
      //           </Link>
      //           <Link to="/login" className="btn btn-lg btn-light">
      //             Login
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

Landing.propTypes = {
  auth: propTypes.object.isRequired
};

export default connect(mapStateToProps)(Landing);
