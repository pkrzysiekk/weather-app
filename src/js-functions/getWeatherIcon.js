export function getWeatherIcon(weatherStatus) {
  let icon = "";
  switch (weatherStatus) {
    case "Partially cloudy":
      icon = "⛅️";
      break;
    case "Overcast":
      icon = "☁️";
      break;
    case "Clear":
      icon = "☀️";
      break;
    default:
      icon = "🌈";
  }
  return icon;
}
