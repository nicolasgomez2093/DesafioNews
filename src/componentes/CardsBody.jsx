import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./cards.css";
import BannerPubli from '../BannerPubli.jpg'

export default function CardsBody({ news }) {

  return (
    <div>
      <Container>
        <Row className="m-auto">
        <Col xs={12}>
        <img src={BannerPubli} alt="" className="banner" />
        </Col>
          {news.slice(3).map((art) => (
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
    </div>
  );
}
