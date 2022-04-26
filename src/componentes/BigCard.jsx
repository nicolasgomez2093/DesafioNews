import React from "react";
import { Col, Row } from "react-bootstrap";
import "./cards.css";

export default function BigCard({art}) {
    console.log(art)
  return (
    <div className="card mx-auto my-5" key={art.url}>
      <Row>
        <Col xs={12} lg={7}>
          <div className="card-header " id="header">
            <img
              src={art.urlToImage}
              alt=""
            />
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <div className="card-content">
            <div className="cuerpo">
              <h3 className="card-title " id="title">
              {art.title}
              </h3>
              <p className="card-excerpt " id="excerpt">
                <span className=""></span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
