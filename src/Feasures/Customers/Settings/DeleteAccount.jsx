/* eslint-disable react/prop-types */
import { RiAlertFill } from "react-icons/ri";
import Modal from "../../../Core/ui/Modal";
import DeleteAccountModal from "./DeleteAccountModal";

function DeleteAccount({ withTitle = true, hasPassword = true }) {
  return (
    <div className="mb-10">
      {withTitle && (
        <p className="py-2 text-xl font-semibold">Delete Account</p>
      )}
      <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
        <RiAlertFill className="mr-2" />
        Proceed with caution
      </p>
      <p className="mt-2">
        Make sure you want to take this step. We will close your account
        forever. There is no way to access your account after this action.
      </p>
      <Modal>
        <Modal.Open
          opens="delete"
          render={(open) => (
            <button
              className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
              onClick={() => open()}
            >
              Continue with deletion
            </button>
          )}
        />
        <Modal.Window name="delete">
          <DeleteAccountModal hasPassword={hasPassword} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default DeleteAccount;
