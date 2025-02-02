import { useState } from "react";
import ConfirmEmailForm from "./ConfirmEmailForm";
import SignUpForm from "./SignUpForm";
import VerificationCode from "./VerificationCode";
import { defaultTimerSeconds, EmailConditions } from "../../Constants";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [defaultTimer, setDefaultTimer] = useState(defaultTimerSeconds);

  function onSelect({ confirmEmail, condition, retryAfterSeconds }) {
    setDefaultTimer(retryAfterSeconds || defaultTimerSeconds);
    switch (condition) {
      case EmailConditions.Verified:
        setEmail(confirmEmail);
        setIsConfirmed(true);
        break;
      case EmailConditions.HasOtp:
        setEmail(confirmEmail);
        setIsConfirmed(false);

        break;
      case EmailConditions.ReceiveOtp:
        setEmail(confirmEmail);
        setIsConfirmed(false);
        break;
      default:
        setEmail("");
        setIsConfirmed(false);
        break;
    }
  }

  function onConfirm({ email, isConfirmed }) {
    if (email !== undefined) setEmail(email);
    setIsConfirmed(isConfirmed);
  }

  return (
    <div className="flex flex-col gap-9">
      {!email && <ConfirmEmailForm onSelect={onSelect} email={email} />}

      {email && !isConfirmed && (
        <VerificationCode
          onConfirm={onConfirm}
          email={email}
          defaultTimer={defaultTimer}
        />
      )}

      {email && isConfirmed && <SignUpForm email={email} />}
    </div>
  );
}

export default SignUp;
