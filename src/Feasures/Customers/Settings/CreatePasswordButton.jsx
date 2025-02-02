/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useManagePassword from "../../Auth/useManagePassword";
import SignButton from "../../Auth/SignButton";

function CreatePasswordButton({ email }) {
  const navigate = useNavigate();
  const { isLoading, sendCode } = useManagePassword();

  function handleCreatePassword(e) {
    e.preventDefault();
    sendCode(
      { email },
      {
        onSuccess: () => {
          navigate(
            `/password/manage?email=${encodeURIComponent(email)}&mode=create`,
          );
        },
      },
    );
  }

  return (
    <form onClick={handleCreatePassword}>
      <SignButton
        disabled={isLoading}
        className="text-sm font-semibold text-blue-600 underline decoration-2"
      >
        Create Password
      </SignButton>
    </form>
  );
}

export default CreatePasswordButton;
