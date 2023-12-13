import React from "react";
import TodoList from "./TodoList";
import CompletedTodosList from "./CompletedTodosList";

const Todos = () => {
  return (
    <>
      <div className="w-auto h-100 d-flex justify-content-center p-4 border border-2 border-primary">
        <TodoList />
      </div>
    </>
  );
};

export default Todos;
