import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isOpen, setIsOpen] = useState(false);

  //setIsOpen is a function

  const deleteHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}

      {isOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
