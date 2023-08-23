import { toast } from "react-toastify";

const ipAdressRegExp = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
const privateIpRegex =
  /^(10(\.\d{1,3}){3})|(192\.168(\.\d{1,3}){2})|(172\.(1[6-9]|2[0-9]|3[0-1])(\.\d{1,3}){2})/;

export function adressTypeDetector(value: string) {
  if (ipAdressRegExp.test(value)) {
    if (privateIpRegex.test(value)) {
      toast.warn("Private IP Adress");
    }
    console.log("VALID IP");
    return AdressType.VALID_IP;
  }
  try {
    let url = new URL(value);
    console.log("VALID URL", url);
    return AdressType.VALID_URL;
  } catch (error) {
    console.log("INVALID URL");
    toast.warn("Incorect URL");
  }

  console.log("INVALID IP OR URL");
}

export function getDomainName(url: string) {}
