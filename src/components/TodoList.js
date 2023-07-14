import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  taskComplete,
  taskIncomplete,
  editTask,
  deleteTask,
} from "../functions/functions";

export default function TodoList({
  todoList,
  setTodoList,
  setEditing,
  setEditedTask,
  setTodoEdit,
}) {
  return (
    <>
      {todoList.length !== 0 && (
        <Row>
          <Col md={2} lg={2} xl={2} className="mx-auto mt-4">
            <h5>Todos:</h5>
          </Col>
        </Row>
      )}
      {todoList.map((item) => (
        <React.Fragment key={item.id}>
          <Row
            className="px-2 py-3 d-flex justify-content-center"
            // id={`todo${item.id}`}
          >
            <Col md={6} lg={6} xl={4} className="d-flex">
              <p className="todo">
                <span
                  className="me-5"
                  style={
                    item.completed
                      ? { color: "lightgray" }
                      : { textShadow: "2px 2px 3px gray" }
                  }
                >
                  <i className="fa-solid fa-circle fa-xs" />
                </span>
                <span
                  style={
                    item.completed
                      ? {
                          textDecoration: "line-through",
                          color: "lightgray",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  {item.task}
                </span>
              </p>
            </Col>
            <Col md={4} lg={4} xl={3} className="ps-5">
              <Button
                variant="success"
                title="Mark Completed"
                onClick={() => taskComplete(todoList, setTodoList, item)}
                disabled={item.completed ? true : false}
              >
                <i className="fa-solid fa-check" />
              </Button>
              <Button
                className="ms-4 ms-md-1"
                variant="info"
                title="Mark Incomplete"
                onClick={() => taskIncomplete(todoList, setTodoList, item)}
                disabled={item.completed ? false : true}
              >
                <i className="fa-solid fa-close fa-lg" />
              </Button>
              <Button
                className="ms-4 ms-md-1"
                variant="warning"
                title="Edit"
                onClick={() =>
                  editTask(
                    setEditing,
                    setEditedTask,
                    todoList,
                    setTodoEdit,
                    item
                  )
                }
                disabled={item.completed ? true : false}
              >
                <i className="fa-solid fa-edit" />
              </Button>
              <Button
                className="ms-4 ms-md-1"
                variant="danger"
                title="Delete"
                onClick={() => deleteTask(todoList, setTodoList, item)}
              >
                <i className="fa-solid fa-trash" />
              </Button>
            </Col>
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}
