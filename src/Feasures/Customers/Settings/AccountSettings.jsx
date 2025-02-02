import AccountTitle from "../AccountTitle";
import ChangePassword from "./ChangePassword";
import useCurrentCustomer from "../Hooks/useCurrentCustomer";
import Spinner from "../../../Core/ui/Spinner";
import ChangeEmail from "./ChangeEmail";
import DeleteAccount from "./DeleteAccount";
import useSession from "../../Auth/useSession";
import CreatePasswordButton from "./CreatePasswordButton";

function AccountSettings() {
  const { isLoading, customer } = useCurrentCustomer();
  const { isAutoLogin } = useSession();
  if (isLoading || isAutoLogin) return <Spinner />;

  return (
    <div>
      <AccountTitle>Account settings</AccountTitle>
      <ChangeEmail email={customer.email} />
      <hr className="mb-8 mt-4" />

      {customer.hasPassword ? (
        <ChangePassword />
      ) : (
        <div>
          <p className="py-2 text-xl font-semibold">Password</p>
          <p className="mb-4">
            You haven&apos;t set up a password for your account yet.
          </p>
          <CreatePasswordButton email={customer.email} />
        </div>
      )}
      <hr className="mb-8 mt-4" />
      <DeleteAccount hasPassword={customer.hasPassword} />
    </div>
  );
}

export default AccountSettings;
