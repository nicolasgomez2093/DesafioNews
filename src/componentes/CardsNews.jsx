import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./cards.css";
import FormSelect from "./FormSelect";

export default function CardsNews({ news, handleChange, handleChange1 }) {
  return (
    <>
      <div className="ml-3">
        <FormSelect handleChange={handleChange} handleChange1={handleChange1} />
      </div>
      <Container>
        <Row className="m-auto">
          {news.map((art) => (
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
    </>
  );
}
