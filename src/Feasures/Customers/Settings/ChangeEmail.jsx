import { useState } from "react";
import ChangeEmailForm from "./ChangeEmailForm";

/* eslint-disable react/prop-types */
function ChangeEmail({ email }) {
  const [isChangeing, setIsChanging] = useState(false);

  function onSend() {
    setIsChanging(false);
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="py-2 text-xl font-semibold">Email Address</p>
        <button
          className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2"
          onClick={() => setIsChanging((old) => !old)}
        >
          {isChangeing ? "Cancel" : "Change"}
        </button>
      </div>
      {!isChangeing ? (
        <p className="text-gray-600">
          Your email address is <strong>{email}</strong>
        </p>
      ) : (
        <ChangeEmailForm onSend={onSend} />
      )}
    </div>
  );
}

export default ChangeEmail;
