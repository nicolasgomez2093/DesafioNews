import React from "react";
import "./cards.css";

export default function Cards() {
  return (
    <div className="card-news mx-auto my-5">
          <div className="card-header-news " id="header">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
          <div className="card-content-news">
            <div className="cuerpo-news">
              <h3 className="card-title-news " id="title">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="card-excerpt-news " id="excerpt">
                <span className=""></span>
              </p>
            </div>
          </div>
    </div>
  );
}
