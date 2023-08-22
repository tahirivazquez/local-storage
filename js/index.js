// Obtener referencias a elementos HTML
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

// Escuchar el evento de clic en el botón
buttonText.addEventListener("click", () => {
  const inputValue = inputText.value;

  // Guardar el valor en localStorage
  localStorage.setItem("userInput", inputValue);
});

