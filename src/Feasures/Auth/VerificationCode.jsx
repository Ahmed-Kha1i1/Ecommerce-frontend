/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import SignButton from "./SignButton";
import userVerifyOTP from "./useVerifyOTP";
import useToast from "../../Core/ui/Toast/useToast";
import {
  defaultTimerSeconds,
  EmailConditions,
  toastTypes,
} from "../../Constants";
import useConfirmEmail from "./useConfirmEmail";
import useTimer from "../../Core/Hooks/useTimer";

function VerificationCode({
  onConfirm,
  email,
  defaultTimer = defaultTimerSeconds,
}) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]); // Array of refs for each input field
  const { seconds, resetTimer } = useTimer(defaultTimer);
  const { isLoading: LoadingSendOtp, confirm } = useConfirmEmail();
  const { isLoading: LoadingVerify, verify } = userVerifyOTP();
  const { showToast } = useToast();

  const isLoading = LoadingVerify || LoadingSendOtp;

  function onResend() {
    confirm(
      { email },
      {
        onSuccess: (result) => {
          const { data } = result;
          const { confirmEmail, condition, retryAfterSeconds } = data;

          switch (condition) {
            case EmailConditions.Verified:
              onConfirm({ email: confirmEmail, isConfirmed: true });
              break;
            case EmailConditions.HasOtp: // retryAfterSeconds
              resetTimer(retryAfterSeconds);
              break;
            case EmailConditions.ReceiveOtp: //60
              resetTimer(defaultTimerSeconds);
              break;
            default:
              onConfirm({ email: "", isConfirmed: false });
              break;
          }
        },
        onError: () => {
          onConfirm({ email: "", isConfirmed: false });
        },
      },
    );
  }
  function onSubmit(e) {
    e.preventDefault();
    verify(
      { email, otp: otp.join("") },
      {
        onSuccess: () => onConfirm({ isConfirmed: true }),
        onError: () =>
          showToast(
            "OTP verification failed. Please try again.",
            toastTypes.Error,
          ),
      },
    );
  }

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e) => {
    const index = inputRefs.current.indexOf(e.target);
    const key = e.key;
    if (
      !/^[0-9]{1}$/.test(key) &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(
        key,
      ) &&
      !(e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault();
    }

    const keyActions = {
      Delete: () => {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index),
          "",
          ...prevOtp.slice(index + 1),
        ]);
        if (index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      },
      Backspace: () => {
        if (index > 0) {
          setOtp((prevOtp) => [
            ...prevOtp.slice(0, index - 1),
            "",
            ...prevOtp.slice(index),
          ]);
          inputRefs.current[index - 1].focus();
        }
      },
      ArrowLeft: () => index > 0 && inputRefs.current[index - 1].focus(),
      ArrowRight: () =>
        index < otp.length - 1 && inputRefs.current[index + 1].focus(),
    };

    if (keyActions[key]) {
      e.preventDefault();
      keyActions[key]();
    }
  };

  // Function to handle input focus
  const handleFocus = (e) => e.target.select();

  // Function to handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      setOtp(text.split(""));
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="container">
        <form id="otp-form" className="" onSubmit={onSubmit}>
          <div className="mb-3 flex flex-wrap justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="shadow-xs border-stroke text-gray-5 flex aspect-square w-12 items-center justify-center rounded-lg border border-transparent bg-slate-100 p-2 text-center text-2xl font-medium outline-none hover:border-slate-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 sm:w-[55px] md:w-[64px]"
              />
            ))}
          </div>
          <SignButton disabled={isLoading || otp.some((element) => !element)}>
            Verify
          </SignButton>
        </form>
        <div className="mt-6 text-sm text-slate-500">
          <span className="mr-2">Didn&apos;t receive code?</span>
          {seconds ? (
            <span>{seconds}</span>
          ) : (
            <button
              className="font-medium text-indigo-500 hover:text-indigo-600"
              onClick={onResend}
              disabled={isLoading}
            >
              Resend
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default VerificationCode;
