import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PictureShowcase.css";

class PictureShowcase extends Component {
  render() {
    return (
      <section id="three" className="wrapper style2">
        <div className="inner">
          <div className="gallery">
            <div>
              <div className="image fit">
                <a href="#">
                  <img
                    src={require("../../../img/clem-onojeghuo-381204-unsplash.jpg")}
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="image fit">
                <a href="#">
                  <img
                    src={require("../../../img/josh-johnson-527229-unsplash.jpg")}
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="image fit">
                <a href="#">
                  <img
                    src={require("../../../img/will-h-mcmahan-723613-unsplash.jpg")}
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="image fit">
                <a href="#">
                  <img
                    src={require("../../../img/melany-rochester-777860-unsplash.jpg")}
                  />
                </a>
              </div>
            </div>
          </div>
          <header className="align-center">
            <p className="special">
              We call upon the truth-seekers, the knowledge-bearers and the
              life-long learners. To share, learn, and search for the truth in
              an era of misinformation.
            </p>
            <hr className="style2" />
            <h2 className="special">Dissuade</h2>
          </header>
        </div>
      </section>
    );
  }
}

export default PictureShowcase;
