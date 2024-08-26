import { getDate } from "./getDate";
import { getFormattedData } from "./getFormattedData";

export async function connectToAPI(location) {
  try {
    let dates = getDate();
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dates[0]}/${dates[1]}?key=WVUYKV24A9AHSQC2YK9ZBR3GH`
    );
    let forecast = await response.json();
    return forecast;
  } catch {
    console.log("ERROR");
  }
}
