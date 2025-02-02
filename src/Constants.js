//export const BASE_URL = "https://localhost:7196";
export const BASE_URL = "https://ecommercestoreapi.runasp.net";

export const defaultTimeStale = 30 * 60 * 1000;

export const globalDecimalPlaces = 2;

export const toastTime = 4;

export const toastTypes = {
  Error: "Error",
  Success: "Success",
  Warning: "Warning",
  Info: "Information",
};

export const EmailConditions = {
  Used: 0,
  Verified: 1,
  HasOtp: 2,
  ReceiveOtp: 3,
};

export const defaultTimerSeconds = 60;

export const paymentMethods = ["onDoor", "Credit Card"];

export const maxPages = 30;
export const conditions = [
  { text: "New", value: 0 },
  { text: "Used", value: 1 },
];
