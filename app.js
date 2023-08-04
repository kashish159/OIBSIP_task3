

const cinput = document.getElementById("Celsius");
const finput = document.getElementById("Fahrenheit");


function computeTemp() {
  
  const cv = event.target.value;

  switch (event.target.name) {
    case "Celsius":

      finput.value = cv * (9/5) + 32;
      break;
    case "Fahrenheit":

      cinput.value = (cv - 32) / (9/5);
      break;

    default:
      break;
  }
}