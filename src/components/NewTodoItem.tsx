import { FormEvent, useState } from "react";
import Checkmark from "./icons/Checkmark";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <div className="w-100 p-2 bg-light rounded-2">
        <form onSubmit={onFormSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="form-control w-auto"
              placeholder="+ New ToDo"
            />
            <button className="btn btn-secondary" type="submit">
              <Checkmark />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTodoItem;
