import React from "react";
import { Link } from "react-router-dom";
import PictureItem from "../layout/PictureShowcase/PictureItem.js";

const FeatureShowcase = ({ pictures }) => {
  return (
    <section id="three" className="wrapper style2 portfolio-background">
      <div className="inner">
        <div className="gallery">
          {pictures.map(picture => (
            <PictureItem picture={picture} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
