const ipAdressRegExp = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
const privateIpRegex =
  /^(10(\.\d{1,3}){3})|(192\.168(\.\d{1,3}){2})|(172\.(1[6-9]|2[0-9]|3[0-1])(\.\d{1,3}){2})/;
const domainNameRegExp = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,}$/;

export function checkIsIP(value: string) {
  return ipAdressRegExp.test(value);
}

export function checkIsPrivateIP(value: string) {
  return privateIpRegex.test(value);
}

export function urlValidation(value: string) {
  let domainName = null;
  try {
    domainName = new URL(value).hostname;
    // Unfortunately, the URL class in JS can accept a string with a nonexistent protocol,
    //and we could encounter a bug with an empty domain name. Therefore, I need this check
    if (domainName === "") {
      return false;
    }
    return domainName;

    // And also I need this because I thing that user can enter something like this:
    //"google.com/somethig/something?limit=10..."
  } catch (err) {
    if (value.includes("/")) {
      let parts = [];
      parts = value.split("/");
      domainName = parts[0];
    } else {
      domainName = value;
    }

    if (domainNameRegExp.test(domainName)) {
      return domainName;
    }
  }
}
