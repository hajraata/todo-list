import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

export default function Todos({ todoItems }) {
  const [editing, setEditing] = useState(false);

  // Sets todo list items (array of objects)
  const [todoList, setTodoList] = useState(todoItems);

  // Sets todo item to edit
  const [todoEdit, setTodoEdit] = useState([]);

  // Sets the new value for the task being edited
  const [editedTask, setEditedTask] = useState("");

  return (
    <Container fluid className="p-0 overflow-hidden">
      <Row>
        <Col md={3} lg={3} xl={3} className="mx-auto mt-4">
          <h1>Todo List</h1>
        </Col>
      </Row>
      {editing ? (
        <EditTodo
          todoEdit={todoEdit}
          setEditedTask={setEditedTask}
          todoList={todoList}
          editedTask={editedTask}
          setTodoList={setTodoList}
          setEditing={setEditing}
        />
      ) : (
        <React.Fragment>
          <AddTodo todoList={todoList} setTodoList={setTodoList} />
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            setEditing={setEditing}
            setEditedTask={setEditedTask}
            setTodoEdit={setTodoEdit}
          />
        </React.Fragment>
      )}
    </Container>
  );
}
