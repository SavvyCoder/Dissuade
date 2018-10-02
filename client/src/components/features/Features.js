import React, { Component } from "react";
import { Link } from "react-router-dom";
import FeatureShowcase from "./FeatureShowcase.js";
import Img from "react-image";
import CommentFeed from "../../img/features/dissuadeCommentFeed.bmp.png";
import Dashboard from "../../img/features/dissuadeDashboard.bmp.png";
import HomePage2 from "../../img/features/dissuadeHomePage2.bmp.png";
import PostFeed from "../../img/features/dissuadePostFeed.bmp.png";
import Profiles from "../../img/features/dissuadeProfiles.bmp.png";
import ProfileView from "../../img/features/dissuadeProfileView.bmp.png";
import ParallaxTitle from "../layout/ParallaxCenter/ParallaxTitle";

class Features extends Component {
  render() {
    // const pictures = [
    //   CommentFeed,
    //   Dashboard,
    //   HomePage2,
    //   PostFeed,
    //   Profiles,
    //   ProfileView
    // ];

    const pictures = [
      { screenshot: CommentFeed, caption: "Comment Feed" },
      { screenshot: Dashboard, caption: "Dashboard" },
      { screenshot: HomePage2, caption: "Home Page Cont." },
      { screenshot: PostFeed, caption: "Post Feed" },
      { screenshot: Profiles, caption: "Profile Feed" },
      { screenshot: ProfileView, caption: "Profile View" }
    ];
    return (
      <div>
        <ParallaxTitle title="Dissuade Showcase" />
        <FeatureShowcase pictures={pictures} />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-xl-6">
              <div class="jumbotron dissuade-gradient">
                <h2 align="center" className="white-text">
                  More Features Incoming!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
