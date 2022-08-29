import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   return () => {
  //   };
  // }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };
  const removeTodo = (id) => {
    const remArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(remArr);
  };

  const updateTodo = (id, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === id ? newVal : item)));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <TodoForm add={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
