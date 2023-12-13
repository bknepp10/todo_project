import { useState } from "react";
import CustomButton from "./CustomButton";
import Trash from "./icons/Trash";
import UndoArrow from "./icons/UndoArrow";

interface Props {
  itemID: number;
  todo: string;
  auxClasses?: string;
  removeTodo?: () => void;
  completeTodo?: () => void;
  undoCompleted?: () => void;
}

const TodoItem = ({
  itemID,
  todo,
  removeTodo,
  completeTodo,
  undoCompleted,
  auxClasses,
}: Props) => {
  const [showButtons, setShowButtons] = useState(false);
  //TODO need to slot or something
  return (
    <li
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      key={itemID}
      className="rounded-4 my-1 text-center d-flex flex-row"
    >
      <div className="input-group m-2">
        {completeTodo && (
          <div className="input-group-text">
            <input
              checked={false}
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              onChange={() => completeTodo()}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
        <input
          type="text"
          readOnly
          value={todo}
          className={"form-control " + auxClasses}
        />
        {showButtons && undoCompleted && (
          <>
            <CustomButton
              onClick={() => undoCompleted()}
              classes="btn-outline-warning"
              key={"undo-" + itemID}
              buttonKey={"undo-" + itemID}
            >
              <UndoArrow />
            </CustomButton>
          </>
        )}
        {showButtons && removeTodo && (
          <>
            <CustomButton
              onClick={() => removeTodo()}
              key={"delete-" + itemID}
              classes="btn-outline-danger"
              buttonKey={"delete-" + itemID}
            >
              <Trash />
            </CustomButton>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
