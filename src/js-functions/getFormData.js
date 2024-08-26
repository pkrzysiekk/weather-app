export function getFormData(e) {
  e.preventDefault();
  const formInput = document.getElementById("city-name");
  console.log(formInput.value);
}
