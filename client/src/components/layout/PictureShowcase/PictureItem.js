import React from "react";
import { Link } from "react-router-dom";
import "./PictureItem.css";
import Img from "react-image";

const PictureItem = ({ picture }) => {
  return (
    <div>
      <div className="image fit">
        <a href="#">
          <img className="portfolio-item" src={picture.screenshot} />
        </a>
        <caption>{picture.caption}</caption>
      </div>
    </div>
  );
};

export default PictureItem;
