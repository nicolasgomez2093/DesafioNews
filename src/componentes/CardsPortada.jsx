import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./cards.css";

export default function CardsPortada({ news }) {
  return (
    <Container>
      <Row className="m-auto">
        {" "}
        {news.slice(0, 1).map((art) => (
          <Col xs={12} md={6} lg={8} className="mx-auto">
            <div className="card mx-auto my-5" key={art.url}>
              <Row>
                <Col xs={12} lg={7}>
                  <div className="card-header " id="header">
                    <img src={art.urlToImage} alt="" />
                  </div>
                </Col>
                <Col xs={12} lg={5}>
                  <div className="card-content">
                    <div className="cuerpo">
                      <h3 className="card-title " id="title">
                        {art.title}
                      </h3>
                      <p className="card-excerpt " id="excerpt">
                        <span className="">{art.description}</span>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
         {news.slice(1,2).map((art) => (
            <Col xs={12} md={6} lg={4} className="mx-auto" key={art.url}>
              <div className="card-second mx-auto my-5">
                <div className="card-header-second ">
                  <img src={art.urlToImage} alt="" />
                </div>
                <div className="card-content-second">
                  <div className="cuerpo-second">
                    <h3 className="card-title-second ">{art.title}</h3>
                    <p className="card-excerpt-second ">
                      <span className=""></span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
