import UseSignIn from "./UseSignIn";
import { useForm } from "react-hook-form";
import InputField from "../../Core/ui/InputField";
import {
  validateEmailRule,
  validatePasswordRule,
} from "../../Core/utils/validatorRulesUtils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignButton from "./SignButton";

function SignIn() {
  const { isLoading, signIn } = UseSignIn();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSuccess() {
    navigate("/");
    setErrorMessage("");
  }

  function onError() {
    setErrorMessage("Email or password is incorrect.");
  }

  function onSubmit(data) {
    signIn(
      { email: data.email, password: data.password },
      {
        onSuccess: onSuccess,
        onError: onError,
      },
    );
  }

  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}{" "}
      {/* Display error message */}
      <InputField
        id="email"
        control={control}
        error={errors?.email}
        label="Email address"
        placeholder="Email address"
        type="email"
        validationRule={validateEmailRule()}
      />
      <InputField
        id="password"
        control={control}
        error={errors?.password}
        label="Password"
        placeholder="Password"
        type="password"
        validationRule={validatePasswordRule("Password")}
      />
      <SignButton disabled={isLoading}>Login</SignButton>
    </form>
  );
}

export default SignIn;
