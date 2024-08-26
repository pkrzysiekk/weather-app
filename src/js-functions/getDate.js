import { addDays } from "./addDays";

function formatDateToYYYYMMDD(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Miesiące są liczone od 0, więc dodajemy 1
  let day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDate() {
  let date = new Date();
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 7);

  let dateString = formatDateToYYYYMMDD(date);
  let newDateString = formatDateToYYYYMMDD(newDate);

  return [dateString, newDateString];
}
