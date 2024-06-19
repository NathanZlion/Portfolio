import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="NathanZlion"
        blockSize={15}
        blockMargin={5}
        color="#00a579"
        blockRadius={4}
        fontSize={16}
      />

    </Row>
  );
}

export default Github;
