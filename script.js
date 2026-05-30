let currentProduct = "";
let currentPrice = "";

function buyNow(product, price) {

  currentProduct = product;
  currentPrice = price;

  document.getElementById("productName").innerText =
    "Product: " + product;

  document.getElementById("productPrice").innerText =
    "Price: ₹" + price;

  document.getElementById("paymentPopup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("paymentPopup").classList.add("hidden");
}

function confirmOrder() {

  alert(
    "Payment received request for " + currentProduct +
    ". We will contact you soon."
  );

  closePopup();
}


// CUSTOM ORDER FORM

document.getElementById("customForm")
.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Custom order submitted successfully!");

  this.reset();
});