let cart = JSON.parse(localStorage.getItem('cart')) || []

//! targeting the cart count
let cartCount = document.getElementById('cartCount')
console.log(cartCount)

//! function to increment the count of cart
function updateCartCount() {
    cartCount.textContent = cart.length;

}

//!  targeting all the buttons

let buttons = document.querySelectorAll('button')
console.log(buttons)
buttons.forEach((btn) => {
    console.log(btn)

    //! adding event to buttons
    btn.onclick = (e) => {
        // console.log("btn clicked")

        //! targetting the nearby product 
        let productsData = e.target.closest('.product')
        console.log(productsData)

        //! string product details in respective variables
        let productImg = productsData.querySelector('img').src
        let productPrice = productsData.querySelector('p').textContent
        let productName = productsData.querySelector('h3').textContent


        let item = { productImg, productPrice, productName }

        console.log(item)

        //! adding product to an "cart" array
        cart.push(item)


        //! storing products in local storage
        alert(`${productName} added to cart`)
        localStorage.setItem("cart", JSON.stringify(cart))

        //! to increment the count of cart
        updateCartCount()
    }
})