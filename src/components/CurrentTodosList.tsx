import TodoItem from "./TodoItem";
import { TodoNode } from "./TodoList";

interface Props {
  todos: TodoNode[];
  doCompleteTodo: (key: number) => void;
  doRemoveTodo: (key: number) => void;
}

const CurrentTodosList = ({ todos, doCompleteTodo, doRemoveTodo }: Props) => {
  const currentTodos = todos.filter((todo) => !todo.isCompleted);

  return (
    <>
      <div className="card mb-4">
        <div className="card-header">Pending ({currentTodos.length})</div>
        <ul className="w-100 list-group">
          {currentTodos.map((item) => (
            <TodoItem
              key={item.id}
              itemID={item.id}
              todo={item.todo}
              removeTodo={() => doRemoveTodo(item.id)}
              completeTodo={() => doCompleteTodo(item.id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CurrentTodosList;
