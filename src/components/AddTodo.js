import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addTask, handleNewTaskValueChange } from "../functions/functions";

export default function AddTodo({ todoList, setTodoList }) {
  // Sets the value for new task
  const [newTaskValue, setNewTask] = useState("");

  return (
    <Row>
      <Col md={10} lg={10} xl={7} className="mx-auto mt-4">
        <Form
          className="d-flex"
          onSubmit={(e) =>
            addTask(e, todoList, newTaskValue, setTodoList, setNewTask)
          }
        >
          <Form.Control
            placeholder="New Task"
            id="taskValue"
            value={newTaskValue}
            onChange={(e) => handleNewTaskValueChange(e, setNewTask)}
            required
          ></Form.Control>
          <Button type="submit" className="mx-3">
            <i className="fa-solid fa-add"></i>
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
