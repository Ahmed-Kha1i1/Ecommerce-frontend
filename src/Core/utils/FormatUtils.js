export function FormatDateTime(dateString) {
  var date = new Date(dateString);

  return date.toLocaleString();
}

export function formatDateToShortFormat(dateString) {
  var date = new Date(dateString);

  return date.toDateString();
}

export function FormatDateAsNumber(dateString) {
  var date = new Date(dateString);

  return date.toLocaleDateString();
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );
