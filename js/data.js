// Obtener referencia al elemento donde se mostrará el dato
const dataElement = document.getElementById("data");

// Obtener el valor almacenado en localStorage
const storedValue = localStorage.getItem("userInput");

// Mostrar el valor en el elemento HTML
if (storedValue) {
  dataElement.textContent = storedValue;
} else {
  dataElement.textContent = "No hay datos almacenados.";
}
