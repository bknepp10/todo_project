import { useState } from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos?: string[];
  doUndoCompleted: (key: number) => void;
  doRemoveTodo: (key: number) => void;
}

const CompletedTodosList = ({ todos, doUndoCompleted }: Props) => {
  const [showCompletedList, setShowCompletedList] = useState(true);
  return (
    <>
      {todos && (
        <div className="d-flex flex-column mt-4">
          <div
            className="d-flex flex-row"
            onClick={() => setShowCompletedList(!showCompletedList)}
            style={{ cursor: "pointer" }}
          >
            <span className="p-2 align-self-start me-auto">Completed</span>
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
                    fill-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </span>
          </div>

          <ul
            style={{ display: showCompletedList ? "block" : "none" }}
            className="list-group border border-1 border-dark"
          >
            {todos.map((item, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={item}
                undoCompleted={() => doUndoCompleted(index)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CompletedTodosList;
