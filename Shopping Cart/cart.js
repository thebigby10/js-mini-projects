let item_data = {};
let total_item = 0;

//parse previous item data state from local storage

if (localStorage.getItem("cart_data") != null) {
  item_data = JSON.parse(localStorage.getItem("cart_data"));
  total_item = parseInt(localStorage.getItem("total_item"));
  document.querySelector("#cart-text").innerHTML = `My Cart(${total_item})`;
  //add item_data items
  for (let key in item_data) {
    if (item_data[key][0] != 0) {
      //create a copy of the product item and add it
      let new_element = document.querySelector("#product").cloneNode(true);
      document.querySelector("#cart-section").appendChild(new_element);
      //display the div
      new_element.style.display = "flex";
      // change its data
      new_element.children[0].innerHTML = `${key} X ${item_data[key][0]}`;
      new_element.children[1].innerHTML = `${item_data[key][1] / item_data[key][0]} X ${item_data[key][0]} = ${item_data[key][1]}`;
    }
  }
}

console.log(item_data);
console.log(total_item);

//add eventlistener to remove button

let remove_buttons = document.querySelectorAll("#cart-section>div>button");
remove_buttons = Array.from(remove_buttons);
remove_buttons.forEach((element) => {
  element.addEventListener("click", {
    //remove from cart logic
  });
});
console.log(remove_buttons);
