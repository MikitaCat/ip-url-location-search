const urlRegExp =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const ipAdressRegExp = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

export function adressTypeDetector(value: string) {
  if (urlRegExp.test(value)) {
    console.log("VALID URL");
    return;
  }

  if (ipAdressRegExp.test(value)) {
    console.log("VALID IP");
    return;
  }

  console.log("INVALID IP OR URL");
}
