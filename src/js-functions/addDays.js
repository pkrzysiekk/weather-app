export function addDays(days) {
  const date = new Date();
  const newDate = new Date();
  newDate.setDate(date.getDate() + days).toLocaleDateString();
  return newDate;
}
