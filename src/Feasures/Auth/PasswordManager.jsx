import { useState } from "react";
import PasswordManagerForm from "./PasswordManagerForm";
import PasswordSetup from "./PasswordSetup";
import { Link, useSearchParams } from "react-router-dom";

function PasswordManager() {
  const [searchParams] = useSearchParams();
  const isCreateMode = searchParams.get("mode") === "create";
  const initialEmail = searchParams.get("email");
  const [email, setEmail] = useState(initialEmail);

  function onSelect(email) {
    setEmail(email);
  }

  return (
    <div id="content" role="main" className="mx-auto w-full max-w-md p-6">
      <div className="mt-7 rounded-xl bg-white p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">
            {email
              ? isCreateMode
                ? "Create Password"
                : "Reset Password?"
              : isCreateMode
                ? "Create Password"
                : "Forgot password?"}
          </h1>
        </div>

        {email ? (
          <PasswordSetup email={email} isCreateMode={isCreateMode} />
        ) : (
          <PasswordManagerForm
            onSelect={onSelect}
            isCreateMode={isCreateMode}
          />
        )}

        {!isCreateMode && (
          <div className="">
            <p className="text-sm text-gray-600">
              <span className="mr-2">Not register?</span>
              <Link
                to="/auth/register"
                className="font-medium text-violet-600 underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordManager;
