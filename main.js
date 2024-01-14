const menuBar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const sideBar = document.querySelector(".sidebar");

menuBar.addEventListener('click', function () {
    sideBar.classList.add("open");
});

close.addEventListener('click', function () {
    sideBar.classList.remove("open");
});

let cartItems = 0;
let totalQuantity = 0;

function addToCart() {
    cartItems++;
    totalQuantity++;
    updateBasketIcon();
}

function updateBasketIcon() {
    const basketIcon = document.getElementById('basket-icon');
    basketIcon.innerText = `🛒 ${cartItems} (${totalQuantity} items)`;
}

function viewBasket() {
    alert(`You have ${cartItems} item(s) in your basket.`);
}
