/* eslint-disable react/prop-types */
import { useState } from "react";
import SignButton from "./SignButton";
import useManagePassword from "./useManagePassword";

function PasswordManagerForm({ onSelect }) {
  const [email, setEmail] = useState();
  const { isLoading, sendCode } = useManagePassword();
  function onSubmit(e) {
    e.preventDefault();
    sendCode(
      { email },
      {
        onSuccess: () => onSelect(email),
      },
    );
  }
  return (
    <form className="mt-5 grid gap-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email" className="mb-2 ml-1 block text-sm font-bold">
          Email address
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            aria-describedby="email-error"
          />
        </div>
        <p className="mt-2 hidden text-xs text-red-600" id="email-error">
          Please include a valid email address so we can get back to you
        </p>
      </div>
      <SignButton disabled={isLoading}>Reset passwod</SignButton>
      <p className="mt-1 text-sm text-gray-600">
        You will receive a verification code shortly to reset your password.
      </p>
    </form>
  );
}

export default PasswordManagerForm;
