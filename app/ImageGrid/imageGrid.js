import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import "./imageGrid.css";
function imageGrid() {
  return (
    <Container className="containerGrid p-5">
      <Row>
        <Col xs={12} md={6} lg={6} className="g-4">
            <div style={{  backgroundSize: "cover", height:'350px', borderRadius:'10px',
            backgroundImage: `url(${image4.src})`, opacity:0.8}}>
          {/* <Image src={image1} alt="Image 2"  className="img-fluid Border"/> */}
          <div className="margin">
            <p className="fw-bold font">Broadway Store</p>
            <Button variant="primary">
             View Store
            </Button>
            </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={6} className="g-4">
        <div style={{  backgroundSize: "cover", height:'350px', borderRadius:'10px',
            backgroundImage: `url(${image4.src})`, opacity:0.8}}>
 <div className="margin">
            <p className="fw-bold font">Alameda Store</p>
            <Button variant="primary">
             View Store
            </Button>
            </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={6} className="g-4 image">
           <div style={{  backgroundSize: "cover", height:'350px', borderRadius:'10px',
            backgroundImage: `url(${image4.src})`, opacity:0.8}}>
                 <div className="margin">
            <p className="fw-bold font">Emeryville Store</p>
            <Button variant="primary">
             View Store
            </Button>
            </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={6} className="g-4 image">
        <div style={{  backgroundSize: "cover", height:'350px', borderRadius:'10px',
            backgroundImage: `url(${image4.src})`, opacity:0.8}}>
                 <div className="margin">
            <p className="fw-bold font">Valencia Store</p>
            <Button variant="primary">
             View Store
            </Button>
            </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default imageGrid;
