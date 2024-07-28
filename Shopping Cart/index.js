let item_data = {};
let total_item = 0;

//parse previous item data state from local storage

let is_item_data_empty = true;

if (localStorage.getItem("cart_data") != null) {
  item_data = JSON.parse(localStorage.getItem("cart_data"));
  total_item = parseInt(localStorage.getItem("total_item"));
  document.querySelector("#cart-button").innerHTML = `Cart(${total_item})`;
  // console.log(localStorage.getItem("cart_data"));
  is_item_data_empty = false;
}
console.log(item_data);
console.log(total_item);

//get all the "add to cart" buttons and attach a event listener to them with appropriate event
let add_cart_buttons = Array.from(document.querySelectorAll(".product"));
// console.log(add_cart_buttons);

add_cart_buttons = add_cart_buttons.map((element) => element.lastElementChild);
// console.log(add_cart_buttons);

add_cart_buttons.forEach((element) => {
  //adding element to item_data
  let element_name = element.parentElement.firstElementChild.innerHTML;
  //FIX THIS
  if (is_item_data_empty) {
    item_data[element_name] = [0, 0];
  }

  element.addEventListener("click", function () {
    let slider_input_value = parseInt(element.parentElement.children[2].value);
    let element_price =
      parseInt(element.parentElement.children[1].innerHTML) *
      slider_input_value;

    console.log(
      `element name: ${element_name}; items: ${slider_input_value}; price : ${element_price}`,
    );
    //cart add logic
    item_data[element_name][0] += slider_input_value;
    item_data[element_name][1] += element_price;
    total_item += slider_input_value;
    //update the cart text
    document.querySelector("#cart-button").innerHTML = `Cart(${total_item})`;
    //add the item_data to local storage for multipage use
    localStorage.setItem("cart_data", JSON.stringify(item_data));
    localStorage.setItem("total_item", total_item);
  });
});
