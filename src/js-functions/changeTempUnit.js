export let celsiusSelected = false;

export function changeTempUnit(e) {
  const button = e.target;
  if (celsiusSelected) {
    celsiusSelected = false;
    button.textContent = "°F";
  } else {
    celsiusSelected = true;
    button.textContent = "°C";
  }
}
