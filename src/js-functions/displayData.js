import { celsiusSelected } from "./changeTempUnit";
import { convertToCelsius } from "./convertToCelsius";
import { getWeatherIcon } from "./getWeatherIcon";
export function displayData(data) {
  const currentDayDiv = document.querySelector(".current-day");
  const laterDaysDiv = document.querySelector(".later-days");

  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    const dayParagraph = document.createElement("p");
    const minTempParagraph = document.createElement("p");
    const maxTempParagraph = document.createElement("p");
    const conditionsParagraph = document.createElement("p");
    const weatherIcon = document.createElement("p");
    dayParagraph.textContent = data[i].day.slice(5);
    if (!celsiusSelected) {
      minTempParagraph.textContent = `Min temp: ${data[i].tempMin} °F`;
      maxTempParagraph.textContent = `Max temp: ${data[i].tempMax} °F`;
    } else {
      minTempParagraph.textContent = `Min temp: ${convertToCelsius(
        data[i].tempMin
      )} °C`;
      maxTempParagraph.textContent = `Max temp: ${convertToCelsius(
        data[i].tempMax
      )} °C`;
    }
    conditionsParagraph.textContent = data[i].conditions;
    weatherIcon.textContent = getWeatherIcon(data[i].conditions);

    card.appendChild(dayParagraph);
    card.appendChild(minTempParagraph);
    card.appendChild(maxTempParagraph);
    card.appendChild(conditionsParagraph);
    card.appendChild(weatherIcon);
    if (i == 0) {
      currentDayDiv.appendChild(card);
    } else {
      laterDaysDiv.appendChild(card);
    }
  }
}
