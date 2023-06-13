// Add event listener to all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".product button");

for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Function to add a product to the cart
function addToCart(event) {
  var product = event.target.parentElement;
  var productName = product.querySelector("h3").innerText;
  var productPrice = product.querySelector(".price").innerText;
  alert("Added " + productName+" to cart for " + productPrice);
}
// Function to remove a product from the cart
function removeFromCart(event) {
var product = event.target.parentElement;
var productName = product.querySelector("h3").innerText;
var productPrice = product.querySelector(".price").innerText;
alert("Removed " + productName + " from cart");
product.remove();
}
