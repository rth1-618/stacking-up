import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DisplayData from "../DisplayData";

const LoginForm = () => {
  // useState hooks for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntries, setAllEntries] = useState([]);
  const [fill, setFill] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    const newAllEntries = [...allEntries];
    newAllEntries.push(newEntry);
    setAllEntries(newAllEntries);
    setFill(true);
    console.log(allEntries);

    // console.log(JSON.stringify(e, null, 4));
    // alert(JSON.stringify(e, null, 4));
  };

  return (
    <>
      <Container className="col-md-4 my-5">
        <Form action="" onSubmit={submit}>
          <Form.Group className="mb-3" controlId="eml">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => {
                //event e
                setFill(false);
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pass">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => {
                setFill(false);
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        {fill && <DisplayData data={{ email: email, password: password }} />}
      </Container>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </>
  );
};

export default LoginForm;
