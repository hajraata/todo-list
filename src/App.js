import React from "react";
// import Container from "react-bootstrap/Container";
// import Todo from "./components/Todo";
import Todo from "./components/Todo";
import data from "./data/data.json";

export default function App() {
  return (
    <>
      <Todo todoItems={data.todoItems} />
    </>
  );
}
