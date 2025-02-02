/* eslint-disable react/prop-types */
import useDeleteAccount from "../Hooks/useDeleteAccount"; // Adjust the import path as needed
import { setMaxLength } from "../../../Core/utils/validatorRulesUtils";
import { useForm } from "react-hook-form";
import InputField from "../../../Core/ui/InputField"; // Adjust the import path as needed
import DeleteModal from "../../../Core/ui/DeleteModel";

function DeleteAccountModal({ onCloseModal, hasPassword = true }) {
  const { deleteAccount, isLoading } = useDeleteAccount();

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values) {
    if (!hasPassword) return;
    const trimmedFormValues = {
      password: values.password.trim(),
    };

    deleteAccount(trimmedFormValues, {
      onSettled: onSettled,
    });
  }

  function onSettled() {
    reset({ password: "" });
  }

  if (!hasPassword) {
    return (
      <DeleteModal
        massage="You cannot delete your account without setting up a password first. Please set a password in your account settings."
        disabledDeleteBtn={true}
        onCloseModal={onCloseModal}
        hideDeleteButton={true}
      />
    );
  }

  return (
    <DeleteModal
      massage="Your account will be deleted permanently!"
      disabledDeleteBtn={isLoading}
      onCloseModal={onCloseModal}
      onDelete={handleSubmit(onSubmit)}
      removeText={isLoading ? "Removing..." : "Remove my account"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <InputField
          id="password"
          type="password"
          label="Current Password"
          placeholder="***********"
          control={control}
          validationRule={{
            required: "Current Password is required",
            maxLength: setMaxLength(20, "Current Password"),
          }}
          error={errors.password}
        />
      </form>
    </DeleteModal>
  );
}

export default DeleteAccountModal;
