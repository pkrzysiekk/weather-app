import { connectToAPI } from "./js-functions/connectToAPI";
import { getDate } from "./js-functions/getDate";
import { getFormData } from "./js-functions/getFormData";
import "./styles.css";
const cityForm = document.getElementById("city-form");

cityForm.addEventListener("submit", (e) => getFormData(e));
connectToAPI("London");
