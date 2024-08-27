export function clearMain() {
  const currentDayDiv = document.querySelector(".current-day");
  const laterDaysDiv = document.querySelector(".later-days");
  while (currentDayDiv.firstChild) {
    currentDayDiv.firstChild.remove();
  }
  while (laterDaysDiv.firstChild) {
    laterDaysDiv.firstChild.remove();
  }
}
