export function jwtDecode(token) {
  if (!token) return {};
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
}

export const isExpired = (expiryInSeconds) => {
  if (!expiryInSeconds) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime > expiryInSeconds;
};

export function getRefreshDelay(token, buffer = 60) {
  const expiry = jwtDecode(token).exp;
  if (!expiry) {
    // If no expiration, trigger immediate refresh
    return 0;
  }
  const currentTime = Date.now() / 1000; // Current time in seconds
  const delaySeconds = expiry - currentTime - buffer;
  return delaySeconds > 0 ? delaySeconds * 1000 : 0; // Convert to milliseconds
}
