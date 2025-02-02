/* eslint-disable react/prop-types */
import { useState } from "react";
import useChangeEmail from "../Hooks/useChangeEmail";
import LightInput from "../../../Core/ui/LightInput";
import SaveButton from "../../../Core/ui/SaveButton";

function ChangeEmailForm({ onSend }) {
  const [confirmEmail, setConfirmEmail] = useState("");
  const { isLoading, changeEmail } = useChangeEmail();

  function onSubmit(e) {
    e.preventDefault();
    changeEmail(
      { newEmail: confirmEmail },
      {
        onSuccess: () => onSend(confirmEmail),
      },
    );
  }

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <p className="mb-2 mt-2 text-base text-dark-dray">
        Enter the new email address you would like to associate with your
        account below. We will send a confirm email to that address.
      </p>
      <div className="w-full">
        <LightInput
          id="email"
          type="email"
          label="New Email"
          placeholder="Email Address"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required={true}
        />
      </div>
      <SaveButton disabled={isLoading}>Send</SaveButton>
    </form>
  );
}

export default ChangeEmailForm;
