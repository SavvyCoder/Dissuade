import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FeaturedPosts.css";

class FeaturedPosts extends Component {
  render() {
    return (
      <section id="one" className="wrapper style2">
        <div className="inner">
          <div className="grid-style">
            <div>
              <div className="box">
                <div className="image fit">
                  <img
                    src={require("../../../img/cristina-gottardi-669852-unsplash.jpg")}
                  />
                </div>
                <div className="content">
                  <header className="align-center">
                    <p>maecenas sapien feugiat ex purus</p>
                    <h2>Upcoming Featured Post</h2>
                  </header>
                  <p>
                    {" "}
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                    facilisis. Vestibulum sit amet tortor velit. Nam elementum
                    nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis volutpat lacus placerat malesuada.
                  </p>
                  <footer className="align-center">
                    <a href="#" className="btn btn-light">
                      Learn More
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <div>
              <div className="box">
                <div className="image fit">
                  <img
                    src={require("../../../img/dmitry-ratushny-412448-unsplash.jpg")}
                    alt=""
                  />
                </div>
                <div className="content">
                  <header className="align-center">
                    <p>mattis elementum sapien pretium tellus</p>
                    <h2>Upcoming Featured Post</h2>
                  </header>
                  <p>
                    {" "}
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                    facilisis. Vestibulum sit amet tortor velit. Nam elementum
                    nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis volutpat lacus placerat malesuada.
                  </p>
                  <footer className="align-center">
                    <a href="#" className="btn btn-light">
                      Learn More
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <div>
              <div className="box">
                <div className="image fit">
                  <img
                    src={require("../../../img/paul-schafer-787418-unsplash.jpg")}
                    alt=""
                  />
                </div>
                <div className="content">
                  <header className="align-center">
                    <p>mattis elementum sapien pretium tellus</p>
                    <h2>Upcoming Featured Post</h2>
                  </header>
                  <p>
                    {" "}
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                    facilisis. Vestibulum sit amet tortor velit. Nam elementum
                    nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis volutpat lacus placerat malesuada.
                  </p>
                  <footer className="align-center">
                    <a href="#" className="btn btn-light">
                      Learn More
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <div>
              <div className="box">
                <div className="image fit">
                  <img
                    src={require("../../../img/anthony-garand-500755-unsplash.jpg")}
                    alt=""
                  />
                </div>
                <div className="content">
                  <header className="align-center">
                    <p>mattis elementum sapien pretium tellus</p>
                    <h2>Upcoming Featured Post</h2>
                  </header>
                  <p>
                    {" "}
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                    facilisis. Vestibulum sit amet tortor velit. Nam elementum
                    nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis volutpat lacus placerat malesuada.
                  </p>
                  <footer className="align-center">
                    <a href="#" className="btn btn-light">
                      Learn More
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedPosts;
