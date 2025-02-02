import AccountTitle from "./AccountTitle";
import DeleteAccount from "./Settings/DeleteAccount";

function CloseAccount() {
  return (
    <div>
      <AccountTitle>Close Account</AccountTitle>
      <DeleteAccount withTitle={false} />
    </div>
  );
}

export default CloseAccount;
