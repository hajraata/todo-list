import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  handleTaskValueChange,
  submitEdit,
  closeEdit,
} from "../functions/functions";

export default function EditTodo({
  todoEdit,
  todoList,
  editedTask,
  setEditedTask,
  setTodoList,
  setEditing,
}) {
  return (
    <>
      {todoEdit.map((item) => (
        <Row key={item.id}>
          <Col md={8} lg={6} xl={5} className="justify-content-center mx-auto">
            <Form
              className="d-flex "
              onSubmit={(e) =>
                submitEdit(
                  e,
                  item,
                  todoList,
                  editedTask,
                  setTodoList,
                  setEditing
                )
              }
            >
              <Form.Control
                size="xs"
                type="text"
                onChange={(e) => handleTaskValueChange(e, setEditedTask)}
                defaultValue={item.task}
                id="editedTaskValue"
                required
              ></Form.Control>
              <Button
                type="submit"
                className="ms-4 ms-md-1"
                variant="success"
                title="Save"
              >
                <i className="fa-solid fa-save"></i>
              </Button>
              <Button
                className="ms-4 ms-md-1"
                variant="danger"
                onClick={() => closeEdit(setEditing)}
                title="Close"
              >
                <i className="fa-solid fa-cancel"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      ))}
    </>
  );
}
