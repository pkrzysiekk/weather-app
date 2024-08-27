import { clearMain } from "./js-functions/clearMain";
import { connectToAPI } from "./js-functions/connectToAPI";
import { displayData } from "./js-functions/displayData";
import { getDate } from "./js-functions/getDate";
import { getFormattedData } from "./js-functions/getFormattedData";
import { getFormData } from "./js-functions/getFormData";
import "./styles.css";
const cityForm = document.getElementById("city-form");

cityForm.addEventListener("submit", (e) => {
  getFormData(e)
    .then((city) => connectToAPI(city))
    .then((data) => getFormattedData(data))
    .then(clearMain())
    .then((formattedData) => displayData(formattedData))
    .catch((error) => {
      alert(error);
    });
});
connectToAPI("London");
