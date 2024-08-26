import { getDate } from "./getDate";

export async function connectToAPI(location) {
  let dates = getDate();
  let response = await fetch(
    `httpss://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dates[0]}/${dates[1]}?key=WVUYKV24A9AHSQC2YK9ZBR3GH`
  );
  let forecast = await response.json();
  return forecast;
}
