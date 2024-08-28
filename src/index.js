import { changeTempUnit } from "./js-functions/changeTempUnit";
import { changeUI } from "./js-functions/changeUI";
import { clearMain } from "./js-functions/clearMain";
import { connectToAPI } from "./js-functions/connectToAPI";
import { displayData } from "./js-functions/displayData";
import { getDate } from "./js-functions/getDate";
import { getFormattedData } from "./js-functions/getFormattedData";
import { getFormData } from "./js-functions/getFormData";
import "./styles.css";
const cityForm = document.getElementById("city-form");
const degreeButton = document.getElementById("degrees");

cityForm.addEventListener("submit", (e) => {
  getFormData(e)
    .then((city) => connectToAPI(city))
    .then((data) => getFormattedData(data))
    .then(clearMain())
    .then((formattedData) => displayData(formattedData))
    .then((formattedData) => changeUI(formattedData))
    .catch((error) => {
      alert(error);
    });
});

degreeButton.addEventListener("click", (e) => changeTempUnit(e));
