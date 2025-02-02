/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useUpdateCustomer from "../Hooks/useUpdateCustomer";
import InputField from "../../../Core/ui/InputField";
import {
  validateNameRule,
  validatePhoneNumberRule,
} from "../../../Core/utils/validatorRulesUtils";
import SelecField from "../../../Core/ui/SelecField";
import SignButton from "../../Auth/SignButton";

function ProfileForm({ customer }) {
  const genderOptions =
    customer?.gender !== null && customer?.gender !== undefined
      ? ["Male", "Female"]
      : ["Select Gender", "Male", "Female"];

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      firstName: customer?.firstName,
      lastName: customer?.lastName,
      phone: customer?.phoneNumber,
      gender:
        customer?.gender === 0
          ? "Male"
          : customer?.gender === 1
            ? "Female"
            : "Select Gender",
    },
  });
  const { isLoading, updateCustomerData } = useUpdateCustomer();

  function onSubmit(values) {
    // Trim all relevant fields
    const trimmedFormValues = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      gender:
        values.gender === "Select Gender"
          ? null
          : values.gender === "Male"
            ? 0
            : 1,
      phoneNumber: values.phone.trim(),
    };

    updateCustomerData(trimmedFormValues);
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
        label="Gender (Optional)"
        type="password"
        values={genderOptions}
        validationRule={null}
      />
      <div className="flex h-[100px] items-end pb-4">
        <SignButton disabled={isLoading}>Update</SignButton>
      </div>
    </form>
  );
}

export default ProfileForm;
