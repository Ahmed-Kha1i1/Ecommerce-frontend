import { BASE_URL } from "../../Constants";
import fetchData from "./Fetch";

export async function getCustomer() {
  const result = await fetchData(`${BASE_URL}/api/Customers/Info`);

  return result.data;
}

export async function changeEmail({ newEmail }) {
  const result = await fetchData(`${BASE_URL}/manage/info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newEmail }),
  });

  return result.data;
}

export async function changePassword({ newPassword, oldPassword }) {
  const result = await fetchData(`${BASE_URL}/manage/info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPassword, oldPassword }),
  });

  return result.data;
}

export async function updateCustomer({
  firstName,
  lastName,
  gender,
  phoneNumber,
}) {
  const result = await fetchData(`${BASE_URL}/api/Customers/Update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, gender, phoneNumber }),
  });
  return result.data;
}
