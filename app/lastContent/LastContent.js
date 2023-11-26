import React from "react";
import { Container,Button } from "react-bootstrap";
import './last.css';
import { MdKeyboardArrowDown } from "react-icons/md";

function  LastContent() {
  return (
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
          that go beyond the mere
        </p>
        <Button className='btncolor d-flex justify-content-center align-items-center'>
          <p className="fw-semibold mt-3">Read More</p>
          <MdKeyboardArrowDown className="iconSize" />

          </Button>
      </Container>
  );
}

export default LastContent;
