import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ParallaxCenter.css";

class ParallaxCenter extends Component {
  render() {
    return (
      <section id="two" className="wrapper style3">
        <div className="inner align-center">
          <header>
            <div className="align-center">
              <p className="parallax-text">
                “Anti-intellectualism has been a constant thread winding its way
                through our political and cultural life, nurtured by the false
                notion that democracy means that 'my ignorance is just as good
                as your knowledge.'”
              </p>
              <hr className="style-seven" />
              <h2 className="parallax-text">Isaac Asimov</h2>
            </div>
          </header>
        </div>
      </section>
    );
  }
}

export default ParallaxCenter;
