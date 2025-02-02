/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import InputField from "../../Core/ui/InputField";
import {
  validateConfirmPasswordRule,
  validateEmailRule,
  validateNameRule,
  validatePasswordRule,
  validatePhoneNumberRule,
} from "../../Core/utils/validatorRulesUtils";
import SelecField from "../../Core/ui/SelecField";
import useRegister from "../Cart/Hooks/useRegister";
import SignButton from "./SignButton";

function SignUpForm({ email }) {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: email || "",
      password: "",
      confirmPassword: "",
      gender: "Male",
      phoneNumber: "",
    },
  });
  const { isLoading, register } = useRegister();

  function onSubmit(values) {
    const { phone, confirmPassword, gender, ...formValues } = values;

    // Trim all relevant fields
    const trimmedFormValues = {
      ...formValues,
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      phoneNumber: phone.trim(), // Trim the phone number as well
      gender: gender === "Male" ? 0 : 1,
    };

    register(trimmedFormValues);
  }


  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        id="firstName"
        control={control}
        error={errors?.firstName}
        label="First Name"
        placeholder="First Name"
        type="text"
        validationRule={validateNameRule("First Name")}
      />

      <InputField
        id="lastName"
        control={control}
        error={errors?.lastName}
        label="Last Name"
        placeholder="Last Name"
        type="text"
        validationRule={validateNameRule("Last Name")}
      />

      <InputField
        id="email"
        control={control}
        error={errors?.email}
        label="Email Address"
        placeholder="Email Address"
        type="text"
        disabled={true}
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

      <InputField
        id="confirmPassword"
        control={control}
        error={errors?.confirmPassword}
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        validationRule={validateConfirmPasswordRule()}
      />

      <InputField
        id="phone"
        control={control}
        error={errors?.phone}
        label="Phone"
        placeholder="e.g., 123-456-7890"
        type="text"
        validationRule={validatePhoneNumberRule()}
      />

      <SelecField
        id="gender"
        control={control}
        error={errors?.gender}
        label="Gender"
        type="password"
        values={["Male", "Female"]}
        validationRule={null}
      />

      <SignButton disabled={isLoading}>Register</SignButton>
    </form>
  );
}

export default SignUpForm;
