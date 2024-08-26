import { connectToAPI } from "./js-functions/connectToAPI";
import { getDate } from "./js-functions/getDate";
import { getFormData } from "./js-functions/getFormData";
import "./styles.css";
const cityForm = document.getElementById("city-form");

cityForm.addEventListener("submit", (e) => {
  getFormData(e)
    .then((city) => connectToAPI(city))
    .then((data) => console.log(data))
    .catch((error) => {
      alert(error);
    });
});
connectToAPI("London");
