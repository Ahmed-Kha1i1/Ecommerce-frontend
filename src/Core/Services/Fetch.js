export default async function fetchData(url, options = {}) {
  try {
    let res = await fetch(url, options);

    const data = await res.json?.();

    if (!res.ok) throw new Error(data?.message || "An error occurred");

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
