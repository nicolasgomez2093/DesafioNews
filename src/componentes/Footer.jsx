import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./cards.css";

function Footer() {
  return (
    <Container className="p-3 texto-footer bg-footer">
      <Row>
        <Col xs={12} md={3} className="text-start px-3"><p>Jose hernandez 959</p><p>Tucuman - Argentina</p></Col>
        <Col xs={12} md={6} className="m-auto"> Todos los derechos reservados para LA GACETA S.A.</Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
}

export default Footer;
