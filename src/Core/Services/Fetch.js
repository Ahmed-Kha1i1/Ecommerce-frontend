export default async function fetchData(url, options = {}) {
  options.credentials = "include";

  try {
    let response = await fetch(url, options);

    if (response.status === 401) {
      throw new Error("Unauthorized");
    }

    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    }

    if (!response.ok) throw new Error(data?.message || "An error occurred");

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
