let color = `rgb(255, 255, 255)`;
function changeColor() {
  let r = randomInt(255),
    g = randomInt(255),
    b = randomInt(255);
  color = `rgb(${r}, ${g}, ${b})`;
  color = document.getElementsByTagName("body")[0].style.backgroundColor =
    `rgb(${r}, ${g}, ${b})`;
  document.getElementById("color-code-field").value = `rgb(${r}, ${g}, ${b})`;
}

function randomInt(maxVal) {
  return Math.floor(Math.random() * maxVal);
}

function copyHex() {
  navigator.clipboard.writeText(color);
  //visible the message div
  let message_div = document.getElementById("message-div");
  message_div.style.visibility = "visible";
  //add animation class
  message_div.classList.add("animate__animated", "animate__bounce");
  //fire timeout function, when timeout hide the message
  setTimeout(function () {
    message_div.classList.remove("animate__animated", "animate__bounce");
    message_div.style.visibility = "hidden";
  }, 1000);
}
