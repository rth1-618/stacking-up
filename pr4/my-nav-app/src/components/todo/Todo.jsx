import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Col, Container, Row } from "react-bootstrap";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} add={submitUpdate} />;
  }
  return (
    <Container className="col-md-4 my-5">
      {todos.map((todo, index) => {
        return (
          <Row className={todo.isComplete && "complete"} key={index}>
            <Col
              xs={12}
              md={8}
              key={todo.id}
              onClick={() => completeTodo(todo.id)}
            >
              {todo.text}
            </Col>
            <Col xs={6} md={4}>
              <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Todo;
