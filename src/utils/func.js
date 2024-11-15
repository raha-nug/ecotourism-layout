function capitalizeFirstLetter(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function encodeToBase64(value) {
  return Buffer.from(value).toString("base64");
}

function decodeFromBase64(encodedValue) {
  return Buffer.from(encodedValue, "base64").toString("utf8");
}

module.exports = { capitalizeFirstLetter, encodeToBase64, decodeFromBase64 };
