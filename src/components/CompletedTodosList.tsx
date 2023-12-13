import { useState } from "react";
import TodoItem from "./TodoItem";
import { TodoNode } from "./TodoList";

interface Props {
  todos: TodoNode[];
  doUndoCompleted: (key: number) => void;
  doRemoveCompleted: (index: number) => void;
}

const CompletedTodosList = ({
  todos,
  doUndoCompleted,
  doRemoveCompleted,
}: Props) => {
  const [showCompletedList, setShowCompletedList] = useState(true);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      {completedTodos && (
        <div className="d-flex flex-column mt-4 card">
          <div
            className="d-flex flex-row card-header"
            onClick={() => setShowCompletedList(!showCompletedList)}
            style={{ cursor: "pointer" }}
          >
            <span className="p-2 align-self-start me-auto">
              Completed ({completedTodos.length})
            </span>
            <span className="p-2">
              {showCompletedList ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </span>
          </div>

          <ul
            style={{ display: showCompletedList ? "block" : "none" }}
            className="list-group"
          >
            {completedTodos.map((item) => (
              <TodoItem
                key={item.id}
                itemID={item.id}
                todo={item.todo}
                removeTodo={() => doRemoveCompleted(item.id)}
                undoCompleted={() => doUndoCompleted(item.id)}
                auxClasses="text-decoration-line-through"
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CompletedTodosList;
