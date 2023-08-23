import { toast } from "react-toastify";

const ipAdressRegExp = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

export function adressTypeDetector(value: string) {
  if (ipAdressRegExp.test(value)) {
    console.log("VALID IP");
    return;
  }
  try {
    let url = new URL(value);
    console.log("VALID URL", url);
  } catch (error) {
    console.log("INVALID URL");
    toast.warn("Incorect URL");
  }

  console.log("INVALID IP OR URL");
}

export function getDomainName(url: string) {}
