import { useState } from "react";
import NewTodoItem from "./NewTodoItem";
import CurrentTodosList from "./CurrentTodosList";
import CompletedTodosList from "./CompletedTodosList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type TodoNode = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<TodoNode[]>([]);

  const handleNewTodo = (newTodo: string) => {
    if (newTodo.trim().length > 0) {
      toast.success("New ToDo: " + newTodo, {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });

      const todoData = {
        id: todoItems.length,
        todo: newTodo,
        isCompleted: false,
      };

      setTodoItems([...todoItems, todoData]);

      console.log("items", todoItems);
    }
  };

  const handleUndoCompleted = (id: number) => {
    toggleCompletedTodoState(id);

    toast.info("Todo updated.", {
      autoClose: 1000,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  const handleCompleteTodo = (id: number) => {
    toggleCompletedTodoState(id);

    toast.success("Todo completed!", {
      autoClose: 1000,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  const toggleCompletedTodoState = (id: number) => {
    const updatedTodos = todoItems.map((todo) => {
      if (todo.id == id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    console.log(updatedTodos);

    setTodoItems(updatedTodos);
  };

  const handleRemoveTodo = (id: number) => {
    const filteredTodos = todoItems.filter((todo) => todo.id !== id);

    setTodoItems(filteredTodos);

    toast.error("Todo deleted.", {
      autoClose: 1000,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="w-50 d-flex flex-column rounded-4 p-4 bg-primary bg-opacity-50">
        {todoItems.length > 0 && (
          <CurrentTodosList
            todos={todoItems}
            doCompleteTodo={handleCompleteTodo}
            doRemoveTodo={handleRemoveTodo}
          />
        )}

        <div className="">
          <NewTodoItem addNewTodo={handleNewTodo} />
        </div>

        <CompletedTodosList
          todos={todoItems}
          doUndoCompleted={handleUndoCompleted}
          doRemoveCompleted={handleRemoveTodo}
        />
      </div>
    </>
  );
};

export default TodoList;
