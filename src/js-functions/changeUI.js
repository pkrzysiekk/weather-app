export function changeUI(formattedData) {
  const currentDay = formattedData[0];
  const currentCondition = currentDay.conditions.split(",")[0];
  const yellow = "#FADD7F";
  const vividBlue = "#30267A";
  const blueberryColor = "#464196";
  const cyan = "#00BCD4";

  switch (currentCondition) {
    case "Clear":
      document.body.style.backgroundColor = yellow;
      break;
    case "Overcast":
      document.body.style.backgroundColor = vividBlue;
      break;
    case "Partially cloudy":
      document.body.style.backgroundColor = blueberryColor;
      break;
    case "Rain":
      document.body.style.backgroundColor = cyan;
      break;
  }
}
