import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DisplayData from "../DisplayData";
import {
  invalidEmail,
  invalidLength,
  invalidRating,
  notFilled,
} from "./validate";

const FeedbackForm = () => {
  const [data, setData] = useState({});
  const [filled, setFilled] = useState(false);
  const [ipError, setIpError] = useState({});
  var currIpError = {};
  const submitHandler = (e) => {
    e.preventDefault();
    setFilled(true);
    // setIpError(currIpError);
    // console.log("ipError:", ipError);
    // alert(JSON.stringify(data, null, 2));
  };
  const changeHandler = (e) => {
    currIpError = { ...ipError };
    // console.log("before", currIpError);
    setFilled(false);
    const { name, value } = e.target;
    switch (name) {
      case "ID":
        if (notFilled(value)) {
          currIpError[name] = "ID is required.";
        } else if (invalidLength(value, 3, 20)) {
          currIpError[name] = "ID must be min 3 chars and max 20 chars long.";
        } else {
          delete currIpError[name];
          setData({ ...data, ID: value });
        }
        break;
      case "name":
        if (notFilled(value)) {
          currIpError[name] = "Name is required.";
        } else if (invalidLength(value, 1, 20)) {
          currIpError[name] = "Name must be max 20 chars long.";
        } else {
          //   console.log(
          //     "Before Deleting name entry",
          //     "currIpError:",
          //     currIpError
          //   );
          delete currIpError.name;
          //   console.log("After Deleting name entry", "currIpError:", currIpError);
          setData({ ...data, name: value });
        }
        break;
      case "email":
        if (notFilled(value)) {
          currIpError[name] = "Email is required.";
        } else if (invalidEmail(value)) {
          currIpError[name] = "Email is not valid.";
        } else {
          delete currIpError[name];
          setData({ ...data, email: value });
        }
        break;
      case "facility":
        if (notFilled(value)) {
          currIpError[name] = "Facility is required.";
        } else {
          delete currIpError[name];
          setData({ ...data, facility: value });
        }
        break;
      case "rating":
        if (notFilled(value)) {
          currIpError[name] = "Rating is required.";
        } else if (invalidRating(value)) {
          currIpError[name] = "Rating must be between 1 and 5";
        } else {
          delete currIpError[name];
          setData({ ...data, rating: value });
        }
        break;
      case "review":
        if (notFilled(value)) {
          currIpError[name] = "Review is required.";
        } else if (invalidLength(value, 1, 150)) {
          currIpError[name] = "Reviews can't be more than 150 characters.";
        } else {
          delete currIpError[name];
          setData({ ...data, review: value });
        }
        break;

      default:
        break;
    }
    setIpError({ ...currIpError });
    // console.log("after", currIpError);
  };
  return (
    <Container className="col-md-6 p-5 my-2 border border-dark rounded">
      <Row>
        <h1>Contact</h1>
      </Row>
      <h2>Feedback Form</h2>
      <ul>
        {Object.entries(ipError)?.map(([prop, val]) => {
          return (
            <li className="text-danger" key={prop}>
              {val}
            </li>
          );
        })}
      </ul>
      <form onSubmit={submitHandler}>
        <Row>
          <label htmlFor="ID">ID</label>
          <input
            className="form-control"
            type="text"
            name="ID"
            formNoValidate
            onChange={changeHandler}
            onBlur={changeHandler}
          />
        </Row>
        <Row>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            formNoValidate
            onChange={changeHandler}
            onBlur={changeHandler}
          />
        </Row>
        <Row>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            formNoValidate
            onChange={changeHandler}
            onBlur={changeHandler}
          />
        </Row>
        <Row>
          <Col>
            <label htmlFor="facility">Facility</label>
            <select
              className="form-control"
              name="facility"
              id="facility"
              defaultValue=""
              disabled={
                ipError.name ||
                ipError.ID ||
                invalidLength(data.ID, 3, 20) ||
                invalidLength(data.name, 1, 20)
              }
              formNoValidate
              onChange={changeHandler}
              onBlur={changeHandler}
            >
              <option value="" disabled>
                --Select one--
              </option>
              <option value="classrooms">classrooms</option>
              <option value="labs">labs</option>
              <option value="hostels">hostels</option>
              <option value="sports">sports</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="rating">Rating</label>
            <input
              className="form-control"
              type="number"
              name="rating"
              id="rating"
              formNoValidate
              onChange={changeHandler}
              onBlur={changeHandler}
            />
          </Col>
        </Row>
        <Row>
          <label htmlFor="review">Review</label>
          <textarea
            className="form-control"
            style={{ whiteSpace: "pre" }}
            name="review"
            rows={6}
            formNoValidate
            onChange={changeHandler}
            onBlur={changeHandler}
          />
        </Row>
        <button
          type="submit"
          className="btn btn-primary my-2"
          disabled={
            !data.email ||
            !data.facility ||
            !data.rating ||
            !data.review ||
            Object.entries(ipError || {}).length > 0
          }
        >
          Submit Feedback
        </button>
      </form>
      {filled && <DisplayData data={data} />}
    </Container>
  );
};

export default FeedbackForm;
