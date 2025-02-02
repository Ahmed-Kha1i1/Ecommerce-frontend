import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast"; // Your existing Toast component
import { removeToast } from "../../GlobalStates/toastSlice"; // Your Redux slice

export function ToastManager() {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.toast.toasts);

  const close = (id) => {
    dispatch(removeToast(id));
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-[2000] flex flex-col items-center divide-y-[1px] overflow-hidden rounded-t-lg">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => close(toast.id)}
        />
      ))}
    </div>
  );
}
