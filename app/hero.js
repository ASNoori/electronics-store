import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import store from "../assets/store.png";
import Image from "next/image";
import "./hero.css";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineStorefront } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <Container fluid className="hero-container p-5 bgColor text-light">
          <Row className="justify-content-center align-items-center">
            <Col md={6} className="align-left">
              <h1 className="display-8 hfontWeight">Visit Our Stores</h1>
              <p className="lead">
                You can receive an order from us, find many products with unique
                discounts,and also,if necessary,contact service center.
              </p>
              {/* Buttons on the first row */}
              <Row className="mb-3">
                <Col className="d-flex">
                  <Button
                    className="me-2 p-2 customTransparent"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <FiShoppingCart className="m-2 iconSize fw-bold" />
                    <p className="fw-semibold p-2">Convenient Store</p>
                  </Button>
                  <Button
                    className="customTransparent"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <MdOutlineStorefront className="m-2 iconSize fw-bold" />
                    <p className="fw-semibold p-2"> Delivery Point</p>
                  </Button>
                </Col>
              </Row>
              {/* Buttons on the second row */}
              <Row>
                <Col>
                  <Button
                    className="customTransparent"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <CiSettings className="m-2 iconSize fw-bold" />
                    <p className="fw-semibold p-2">Service Center</p>
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="text-center">
            <Image
                src={store} // actual path to image
                alt="Hero Image"
                width={400} //width of the image
                height={300} //  height of the image
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
