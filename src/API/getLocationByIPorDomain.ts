import axios from "axios";

// This API can return location data using either an IP address or a Domain Name
export async function getLocationByIPorDomain(domainName: string) {
  const response = await axios.get(`http://ip-api.com/json/${domainName}`);
  const data = await response.data;
  console.log("DATA", data);
  return data;
}
