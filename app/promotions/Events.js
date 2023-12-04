import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./Events.css";
import image from "../../assets/phone.jpg";
import blackimage from "../../assets/black.jpg";
import officeimage from "../../assets/headphone.jpg";
import blkimage from "../../assets/blkphone.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

function Events() {
  return (
    <Container fluid className="container-grid">
      <h4 className="headingcolor">Promotions</h4>
      <Container fluid className="content-grid">
        <Row>
          <Col xs={12} md={6} lg={6} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${image.src})`,
                opacity: 0.8,
              }}
            >
              <div className="margin">
                <h6 className="h-color">24 Nov - 2 Dec</h6>
                <p className="fw-bold font">Apple Shopping Event</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${image.src})`,
                opacity: 0.8,
              }}
            >
              <div className="margin">
                <h6 className="h-color">10 Nov - 28 Nov</h6>
                <p className="fw-bold font">Pre-Order Google Pixel 7</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-grid">
        <Row>
          <Col xs={12} md={12} lg={12} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${blackimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="spacing">
                <h6 className="h-color">24 Nov - 2 Dec</h6>
                <p className="fw-bold font ">
                  Discount on all Smart appliances up to 25%
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-grid">
        <Row>
          <Col xs={12} md={6} lg={6} className="image-col">
            <div
              style={{
                backgroundSize: "contain",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${officeimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="margin">
                <h6 className="h-color">20 Oct - 5 Nov</h6>
                <p className="fw-bold font">New Aurora Headset</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="image-col">
            <div
              style={{
                backgroundSize: "contain",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${officeimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="margin">
                <h6 className="h-color">15 Oct - 25 Oct</h6>
                <p className="fw-bold font">DualSense Discount</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-grid">
        <Row>
          <Col xs={12} md={12} lg={12} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${blackimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="spacing">
                <h6 className="h-color">12 Oct - 20 Oct</h6>
                <p className="fw-bold font ">
                  Gift Photo paper for instant cameras
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-grid">
        <Row>
          <Col xs={12} md={6} lg={6} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${blkimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="margin">
                <h6 className="h-color">10 Oct - 18 Oct</h6>
                <p className="fw-bold font">Discount Nothing phone</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${blkimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="margin">
                <h6 className="h-color">27 Sep - 15 Oct</h6>
                <p className="fw-bold font">Discount Xioami mi 11</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-grid">
        <Row>
          <Col xs={12} md={12} lg={12} className="image-col">
            <div
              style={{
                backgroundSize: "cover",
                height: "300px",
                borderRadius: "10px",
                backgroundImage: `url(${blackimage.src})`,
                opacity: 0.8,
              }}
            >
              <div className="spacing">
                <h6 className="h-color">25 Sep - 10 Oct</h6>
                <p className="fw-bold font ">
                  Discount for new 7000 processors
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="lastContainer p-4">
        <h4 className="fw-bold">
          Online store of household appliances and electronics
        </h4>
        <p className="my-3">
          Then the question arises: where’s the content? Not there yet? That’s
          not so bad, there’s dummy copy to the rescue. But worse, what if the
          fish doesn’t fit in the can, the foot’s to big for the boot? Or to
          small? To short sentences, to many headings, images too large for the
          proposed design, or too small, or they fit in but it looks iffy for
          reasons. A client that’s unhappy for a reason is a problem, a client
          that’s unhappy though he or her can’t quite put a finger on it is
          worse. Chances are there wasn’t collaboration, communication, and
          checkpoints, there wasn’t a process agreed upon or specified with the
          granularity required. It’s content strategy gone awry right from the
          start. If that’s what you think how bout the other way around? How can
          you evaluate content without design? No typography, no colors, no
          layout, no styles, all those things that convey the important signals
          that go beyond the mere textual, hierarchies of information, weight,
          emphasis, oblique stresses, priorities, all those subtle cues that
          also have visual and emotional appeal to the reader.
        </p>
        <Button className="btncolor d-flex justify-content-center align-items-center">
          <p className="fw-semibold mt-3"> Read More </p>
          <MdKeyboardArrowDown className="iconSize" />
        </Button>
      </Container>
    </Container>
  );
}

export default Events;
