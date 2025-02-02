/* eslint-disable react/prop-types */
import DeleteModal from "../../../Core/ui/DeleteModel";
import useDeleteAddress from "./useDeleteAddress";

function DeleteAddressModel({ onCloseModal, address }) {
  const { deleteAddress, isLoading } = useDeleteAddress();


  function onDelete() {
    deleteAddress(
      { addressId: address.id },
      {
        onSuccess: () => onCloseModal(),
      },
    );
  }

  return (
    <DeleteModal
      massage="This Address will be deleted permanently!"
      disabledDeleteBtn={isLoading}
      onCloseModal={onCloseModal}
      onDelete={onDelete}
      removeText="Remove Address"
    />
  );
}

export default DeleteAddressModel;
