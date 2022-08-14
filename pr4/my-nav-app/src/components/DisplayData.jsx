import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DisplayData = ({ data }) => {
  function listIt(data) {
    const rows = [];
    for (var key in data) {
      rows.push(
        <Row key={key} className="mt-1">
          <Col className="mx-1 p-6 border border-primary rounded">{key}</Col>
          <Col
            className="mx-1 p-6 border border-success rounded"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {data[key]}
          </Col>
        </Row>
      );
    }
    return rows;
  }
  return <Container className="col-7">{listIt(data)}</Container>;
};

export default DisplayData;

// data.isArray() ? data?.map((ele) => (
//           <Row>
//             <Col>ele</Col>
//             <Col>ele</Col>
//           </Row>
//         )):
