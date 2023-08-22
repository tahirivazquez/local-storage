const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", () => {
  const inputValue = inputText.value;

  localStorage.setItem("userInput", inputValue);
});

