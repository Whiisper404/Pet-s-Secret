let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
    cart.push({ item, price });
    saveCartToStorage();
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.item} - ${product.price} Р <button onclick="removeFromCart(${index})">Удалить</button>`;
        cartItems.appendChild(listItem);
        total += product.price;
    });

    totalElement.textContent = `Общая сумма: ${total} Р`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    displayCart();
}

function clearCart() {
    cart = [];
    saveCartToStorage();
    displayCart();
}

function openCart() {
    document.getElementById("cart").style.width = "300px";
}

function closeCart() {
    document.getElementById("cart").style.width = "0";
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function() {
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
    displayCart();
});