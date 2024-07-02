let states = ["red", "green", "blue"];
function changeColor() {
  //get current background color
  let current_state =
    document.getElementsByTagName("body")[0].style.backgroundColor;
  console.log(current_state);
  //check the color index from states and change to next state
  for (let i = 0; i < 3; i++) {
    if (states[i] == current_state) {
      if (i == 2) {
        document.getElementsByTagName("body")[0].style.backgroundColor =
          states[0];
      } else {
        document.getElementsByTagName("body")[0].style.backgroundColor =
          states[i + 1];
      }
    }
  }
}
