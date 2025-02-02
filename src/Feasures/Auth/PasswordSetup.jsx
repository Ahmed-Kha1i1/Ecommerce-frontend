/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import InputField from "../../Core/ui/InputField";
import {
  validateEmailRule,
  validatePasswordRule,
} from "../../Core/utils/validatorRulesUtils";
import SignButton from "./SignButton";
import useResetPassword from "./useResetPassword";

function PasswordSetup({ email, isCreateMode = false }) {
  const { isLoading, resetPassword } = useResetPassword();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      email: email || "",
      password: "",
      code: "",
    },
  });
  function onSubmit(values) {
    const trimmedFormValues = {
      email: values.email.trim(),
      newPassword: values.password.trim(),
      resetCode: values.code.trim(),
    };

    resetPassword(trimmedFormValues);
  }

  return (
    <div className="">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="w-full rounded-lg bg-white sm:max-w-md md:mt-0">
          <form
            className="mt-4 space-y-4 md:space-y-5 lg:mt-5"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              id="email"
              control={control}
              error={errors?.email}
              label="Email Address"
              placeholder="Email Address"
              type="text"
              disabled={true}
              validationRule={validateEmailRule()}
              readOnly={isCreateMode}
            />

            <InputField
              id="password"
              control={control}
              error={errors?.password}
              label={isCreateMode ? "New Password" : "New Password"}
              placeholder="Password"
              type="password"
              validationRule={validatePasswordRule("Password")}
            />

            <InputField
              id="code"
              control={control}
              error={errors?.code}
              label="Verification Code"
              placeholder="Code"
              type="text"
              validationRule={{ required: "Verification code is required" }}
            />
            <SignButton disabled={isLoading}>
              {isCreateMode ? "Create password" : "Reset password"}
            </SignButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordSetup;
