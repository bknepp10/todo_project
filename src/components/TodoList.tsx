import React, { useState, KeyboardEvent } from "react";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";
import CurrentTodosList from "./CurrentTodosList";
import CompletedTodosList from "./CompletedTodosList";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const handleNewTodo = (newTodo: string) => {
    if (newTodo.trim().length > 0) {
      setTodoItems([...todoItems, newTodo]);
    }
  };

  const handleUndoCompleted = (index: number) => {
    removeCompletedTodoAtIndex(index);
  };

  const handleCompleteTodo = (index: number) => {
    const currentTodos = [...todoItems];
    const completedTodo = currentTodos.splice(index, 1).pop();

    if (!completedTodo) {
      //throw error here
      return;
    }

    setCompletedTodos([completedTodo, ...completedTodos]);

    removeCurrentTodoAtIndex(index);
  };

  const removeCurrentTodoAtIndex = (index: number) => {
    let todos = [...todoItems];
    todos.splice(index, 1);
    setTodoItems([...todos]);
  };

  const removeCompletedTodoAtIndex = (index: number) => {
    let todos = [...completedTodos];
    const undoneTodo = todos.splice(index, 1);
    setTodoItems([...todoItems, ...undoneTodo]);
    setCompletedTodos([...todos]);
  };

  return (
    <>
      <div className="w-25 d-flex flex-column">
        {todoItems.length > 0 && (
          <CurrentTodosList
            todos={todoItems}
            doCompleteTodo={handleCompleteTodo}
            doRemoveTodo={removeCurrentTodoAtIndex}
          />
        )}

        <div className="">
          <NewTodoItem addNewTodo={handleNewTodo} />
        </div>

        {completedTodos.length > 0 && (
          <CompletedTodosList
            todos={completedTodos}
            doRemoveTodo={removeCurrentTodoAtIndex}
            doUndoCompleted={handleUndoCompleted}
          />
        )}
      </div>
    </>
  );
};

export default TodoList;
