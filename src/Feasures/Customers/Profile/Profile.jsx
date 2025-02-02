import AccountTitle from "../AccountTitle";
import useCurrentCustomer from "../Hooks/useCurrentCustomer";
import Spinner from "../../../Core/ui/Spinner";
import ProfileForm from "./ProfileForm";
import useSession from "../../Auth/useSession";

function Profile() {
  const { isLoading: loadingCustomer, customer } = useCurrentCustomer();
  const { isAutoLogin } = useSession();
  if (loadingCustomer || isAutoLogin) return <Spinner />;
  return (
    <div>
      <AccountTitle>Profile</AccountTitle>

      <ProfileForm customer={customer} />
    </div>
  );
}

export default Profile;
