export function getFormData(e) {
  e.preventDefault();
  const city = document.getElementById("city-name").value;
  return new Promise((resolve, reject) => {
    if (city) resolve(city);
    else reject("City required!");
  });
}
