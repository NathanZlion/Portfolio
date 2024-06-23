import { Col } from "react-bootstrap";
import React from "react";

function Techicon(props) {
    return (
        <Col id={props.tooltipId} xs={4} md={1} className="tech-icons tooltip-container bg-yellow-700" data-tooltip-id={props.tooltipId}>
            {props.icon}
            <div className="tooltip-message">{props.tooltipTextContent}</div>
        </Col>
    )
}

export default Techicon;

