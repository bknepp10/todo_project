import "./App.css";
import TodoHeader from "./components/TodoHeader";
import Todos from "./components/Todos";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100 w-auto">
        <TodoHeader />
        <Todos />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
