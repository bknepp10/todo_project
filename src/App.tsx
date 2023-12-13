import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="d-flex flex-column w-auto vh-100">
        <TodoHeader />
        <Todos />
      </div>
    </>
  );
}

export default App;
