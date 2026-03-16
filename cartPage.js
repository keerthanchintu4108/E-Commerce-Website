let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemContainer = document.getElementById("cartItemsContainer");
let totalPrice = document.getElementById("totalPrice");

function displayCartItems() {
  let total = 0;
  cartItemContainer.innerHTML = "";

  cart.forEach((item, index) => {
    console.log(item, index);

    let cartItems = document.createElement("div");
    cartItems.className = "cart-Items";

    cartItems.innerHTML = `
      <img src="${item.productImg}" alt="${item.productName}">
        <aside>
          <h3>${item.productName}</h3>
          <p>${item.productPrice}</p>
          <button onclick="removeItem(${index})">Remove Item</button>
        </aside>
    `;

    cartItemContainer.appendChild(cartItems);

    let itemPrice = parseFloat(item.productPrice.replace(/[^\d.]/g, ""));
    console.log(itemPrice);
    total = total + itemPrice;
  });
  totalPrice.textContent = total;
  console.log(totalPrice)
}

displayCartItems();

let clearCart = document.getElementById('clearCart')
console.log(clearCart)

clearCart.onclick = () => {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart))
  window.location.href = "./cartPage.html"
}

let checkout = document.getElementById('checkout')
console.log(checkout)

checkout.onclick = () => {
  alert(` Thank You For Shopping with us. Your total bill ₹${totalPrice.textContent}`)
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart))
  window.location.href = "./homePage.html"
}


function removeItem(index) {
  console.log(index, "index from remove cart")
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
  displayCartItems()
}