/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import Modal from "../../../Core/ui/Modal";
import DeleteAddressModel from "./DeleteAddressModel";

function DeleteAddress({ address }) {
  return (
    <Modal>
      <Modal.Open
        opens="deleteAddress"
        render={(open) => (
          <button disabled={address.isDefault} onClick={open}>
            <MdDelete className="h-6 w-6 cursor-pointer text-orange-600" />
          </button>
        )}
      ></Modal.Open>
      <Modal.Window name="deleteAddress">
        <DeleteAddressModel address={address} />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteAddress;
