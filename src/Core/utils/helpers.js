export function getRateCss(rate) {
  if (rate % 1 >= 0.5) {
    return Math.floor(rate).toString() + "-5";
  } else {
    return Math.floor(rate);
  }
}

export function formatToFixed(value, decimalPlaces) {
  const roundedValue = value.toFixed(decimalPlaces);
  const integerPart = Math.floor(value);
  return roundedValue == integerPart ? integerPart : roundedValue;
}

String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
