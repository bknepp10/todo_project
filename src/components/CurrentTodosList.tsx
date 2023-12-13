import TodoItem from "./TodoItem";

interface Props {
  todos: string[];
  doCompleteTodo: (key: number) => void;
  doRemoveTodo: (key: number) => void;
}

const CurrentTodosList = ({ todos, doCompleteTodo, doRemoveTodo }: Props) => {
  return (
    <>
      <ul className="w-100 list-group mb-4 border border-1 border-dark">
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={item}
            removeTodo={() => doRemoveTodo(index)}
            completeTodo={() => doCompleteTodo(index)}
          />
        ))}
      </ul>
    </>
  );
};

export default CurrentTodosList;
