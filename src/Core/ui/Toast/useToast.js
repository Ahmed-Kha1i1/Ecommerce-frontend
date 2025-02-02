import { useDispatch } from "react-redux";
import { addToast } from "../../GlobalStates/toastSlice.js";

function useToast() {
  const dispatch = useDispatch();

  function showToast(message, type) {
    dispatch(addToast({ id: generateUEID(), type, message }));
  }

  return { showToast };
}

export default useToast;

function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);
  return first + second;
}
