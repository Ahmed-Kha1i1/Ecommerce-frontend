import { SHA256 } from "crypto-js";

export function hash(text) {
  return SHA256(text).toString();
}
