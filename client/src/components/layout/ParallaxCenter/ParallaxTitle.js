import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ParallaxCenter.css";

const ParallaxTitle = ({title}) => {
    return (
      <section id="two" className="wrapper style3 title-image">
        <div className="inner align-center">
          <header>
            <div className="align-center">
            <hr className="style-two" />
            <h1 className="parallax-text display-4">{title}</h1>
              <hr className="style-two" />
            </div>
          </header>
        </div>
      </section>
    );
}

export default ParallaxTitle;
