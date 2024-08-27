export function convertToCelsius(toCovert) {
  let converted = (toCovert - 32) / 1.8;
  converted = Math.round(converted);
  return converted;
}
