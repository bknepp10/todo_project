import { useState } from "react";
import CustomButton from "./CustomButton";
import Trash from "./icons/Trash";
import UndoArrow from "./icons/UndoArrow";

interface Props {
  index: number;
  todo: string;
  removeTodo?: () => void;
  completeTodo?: () => void;
  undoCompleted?: () => void;
}

const TodoItem = ({
  index,
  todo,
  removeTodo,
  completeTodo,
  undoCompleted,
}: Props) => {
  const [showButtons, setShowButtons] = useState(false);
  //TODO need to slot or something
  return (
    <li
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      key={index}
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
        <input type="text" readOnly value={todo} className="form-control" />
        {undoCompleted && (
          <>
            <CustomButton
              onClick={() => undoCompleted()}
              classes="btn-outline-warning"
              key={"undo-" + index}
            >
              <UndoArrow />
            </CustomButton>
          </>
        )}
        {showButtons && removeTodo && (
          <>
            <CustomButton
              onClick={() => removeTodo()}
              key={"delete-" + index}
              classes="btn-outline-danger"
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
