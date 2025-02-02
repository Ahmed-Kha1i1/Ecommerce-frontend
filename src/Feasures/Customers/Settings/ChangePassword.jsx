/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useChangePassword from "../Hooks/useChangePassword";
import { useForm } from "react-hook-form";
import {
  validateConfirmPasswordRule,
  validatePasswordRule,
} from "../../../Core/utils/validatorRulesUtils";
import InputField from "../../../Core/ui/InputField"; // Adjust the import path as needed
import SaveButton from "../../../Core/ui/SaveButton";

const defaultValues = {
  newPassword: "",
  oldPassword: "",
};

function ChangePassword() {
  const { isLoading, changePassword } = useChangePassword(); // Corrected typo
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues,
  });

  function onSubmit(values) {
    const trimmedFormValues = {
      newPassword: values.newPassword.trim(),
      oldPassword: values.oldPassword.trim(),
    };

    changePassword(trimmedFormValues, {
      onSettled: onSettled,
    });
  }

  function onSettled() {
    reset(defaultValues);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="py-2 text-xl font-semibold">Password</p>
      <div className="flex items-center">
        <div className="grid w-full grid-cols-1 space-y-2 sm:grid-cols-2 sm:space-x-3 sm:space-y-0">
          <InputField
            id="oldPassword"
            type="password"
            label="Current Password"
            placeholder="***********"
            control={control}
            validationRule={validateConfirmPasswordRule(
              "oldPassword",
              "Current Password",
            )}
            error={errors.oldPassword}
          />
          <InputField
            id="newPassword"
            type="password"
            label="New Password"
            placeholder="***********"
            control={control}
            validationRule={validatePasswordRule("Password")}
            error={errors.newPassword}
          />
        </div>
      </div>

      <p className="mt-2">
        Can&apos;t remember your current password.{" "}
        <Link
          className="text-sm font-semibold text-blue-600 underline decoration-2"
          to="/password/manage"
        >
          Recover Account
        </Link>
      </p>
      <SaveButton disabled={isLoading}>Save Password</SaveButton>
    </form>
  );
}

export default ChangePassword;
