import { FormEvent, useState } from "react";
import Checkmark from "./icons/Checkmark";

interface Props {
  addNewTodo: (todo: string) => void;
}

const NewTodoItem = ({ addNewTodo }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    addNewTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="w-100 h-100 ">
        <form onSubmit={onFormSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="form-control w-auto"
              placeholder="+ New ToDo"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <Checkmark />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTodoItem;
