import header1 from "../assets/todo-header-pt1.svg";
import header2 from "../assets/todo-header-pt2.svg";
import check from "../assets/check.svg";

const TodoHeader = () => {
  return (
    <>
      <div className="w-auto bg-primary bg-opacity-75 p-4">
        <img src={header1} className="align-bottom" alt="" />
        <img src={header2} className="align-bottom" alt="" />
        <img src={check} className="align-bottom" alt="" />
      </div>
    </>
  );
};

export default TodoHeader;
