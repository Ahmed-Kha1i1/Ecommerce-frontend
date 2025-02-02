/* eslint-disable react/prop-types */
import { useState } from "react";
import SignButton from "./SignButton";
import useConfirmEmail from "./useConfirmEmail";

function ConfirmEmailForm({ onSelect, email }) {
  const [confirmEmail, setConfirmEmail] = useState(email);
  const { isLoading, confirm } = useConfirmEmail();

  function onSubmit(e) {
    e.preventDefault();
    confirm(
      { email: confirmEmail },
      {
        onSuccess: (result) => {
          const { data } = result;
          const { condition, retryAfterSeconds } = data;
          onSelect({ confirmEmail, condition, retryAfterSeconds });
        },
      },
    );
  }
  return (
    <form className="rounded-lg bg-white" onSubmit={onSubmit}>
      <p className="mb-8 mt-2 text-center text-lg text-dark-dray">
        Type your e-mail to create a account.
      </p>
      <div className="relative mb-3 bg-inherit">
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          className="peer h-12 w-full rounded-lg bg-transparent px-2 placeholder-transparent ring-2 ring-gray-500 focus:border-rose-600 focus:outline-none focus:ring-sky-600"
          placeholder="Email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <label
          htmlFor="confirmEmail"
          className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-[0.6rem] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-600"
        >
          Email
        </label>
      </div>
      <SignButton disabled={isLoading}>Continue</SignButton>
    </form>
  );
}

export default ConfirmEmailForm;
