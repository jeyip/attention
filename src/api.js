import { lifxToken } from "./constants";

const baseUrl = "https://api.lifx.com/v1/lights";

const breathe = async ({ cycles, toColor, period, persist, powerOn }) => {
  const result = await fetch(`${baseUrl}/all/effects/breathe`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate",
      Authorization: `Bearer ${lifxToken}`,
    },
    body: JSON.stringify({
      color: toColor,
      period,
      cycles,
      persist,
      power_on: powerOn,
    }),
  });

  return result;
};

export { breathe };
