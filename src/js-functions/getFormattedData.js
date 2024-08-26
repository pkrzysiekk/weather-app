import { Day } from "../dayClass";
import { connectToAPI } from "./connectToAPI";

export function getFormattedData(data) {
  const formattedData = [];
  for (let i = 0; i < 8; i++) {
    const newDate = new Day(
      data.days[i].datetime,
      data.days[i].tempmin,
      data.days[i].tempmax,
      data.days[i].conditions
    );
    formattedData.push(newDate);
  }
  return formattedData;
}
