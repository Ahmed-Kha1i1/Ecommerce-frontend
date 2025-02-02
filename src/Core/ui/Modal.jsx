/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
// import { HiXMark } from "react-icons/hi2";

import Popup from "./Popup";

const ModelContext = createContext();
let modalFunctions = {};

function Modal({ children }) {
  const [modalName, setModalName] = useState("");
  const close = () => setModalName("");
  const open = setModalName;
  modalFunctions = { close, open };

  return (
    <ModelContext.Provider
      value={{
        modalName,
        close,
        open,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

function Open({ opens: opensWindowName, render }) {
  const { open } = useContext(ModelContext);

  return render(() => open(opensWindowName));
}

function Window({ children, name, className }) {
  const { close, modalName } = useContext(ModelContext);
  const ref = useRef();

  function handleClose(e) {
    if (e.target == ref.current) {
      close();
    }
  }
  if (name !== modalName) return null;

  return (
    <Popup referance={ref} className={className} onClick={handleClose}>
      <button className="ml-auto block" onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="float-right w-3.5 shrink-0 cursor-pointer fill-gray-400 hover:fill-blue-500"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>
      </button>
      {cloneElement(children, { onCloseModal: close })}
    </Popup>
  );
}

Modal.closeWindow = () => modalFunctions.close();
Modal.openWindow = (name) => modalFunctions.open(name);

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
