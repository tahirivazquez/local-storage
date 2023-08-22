const dataElement = document.getElementById("data");

const storedValue = localStorage.getItem("userInput");

if (storedValue) {
  dataElement.textContent = storedValue;
} else {
  dataElement.textContent = "No hay datos almacenados.";
}
