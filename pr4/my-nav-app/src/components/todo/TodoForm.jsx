import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

const TodoForm = (props) => {
  const [item, setItem] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const addTodo = (e) => {
    e.preventDefault();
    // console.log("props", props);
    props.add({
      id: Math.floor(Math.random() * 1000),
      text: item,
    });
    setItem("");
  };
  return (
    <Container className="col-md-4 my-5">
      <Form onSubmit={addTodo}>
        <Form.Group as={Row}>
          <Form.Group as={Col} xs={12} md={8} className="mb-3">
            <Form.Control
              type="text"
              placeholder={
                props.edit ? "Update todo..." : "Add an item to your todo list"
              }
              value={item}
              onChange={(e) => {
                //event e
                setItem(e.target.value);
              }}
              ref={inputRef}
            />
          </Form.Group>
          <Form.Group as={Col} xs={6} md={4} className="mb-3">
            {props.edit ? (
              <Button type="submit" variant="outline-success">
                Update
              </Button>
            ) : (
              <Button type="submit" variant="success">
                Add
              </Button>
            )}
          </Form.Group>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TodoForm;
