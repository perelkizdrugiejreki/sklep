// Inicjalizowanie koszyka
const cart = [];

// Aktualizacja widoku koszyka
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price.toFixed(2)} zł`;
        cartItemsElement.appendChild(listItem);
        total += product.price;
    });

    cartTotalElement.textContent = `Całkowity koszt: ${total.toFixed(2)} zł`;
}

// Płynne przewijanie
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
