// Inicjalizowanie zmiennych
const cart = [];

// Funkcja do dodawania produktów do koszyka
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
    };
    cart.push(product);
    updateCartDisplay();
}

// Funkcja do aktualizacji wyświetlania koszyka
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Czyszczenie poprzednich elementów
    cartItemsElement.innerHTML = '';

    // Wyświetlanie produktów w koszyku
    let total = 0;
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price.toFixed(2)} zł`;
        cartItemsElement.appendChild(listItem);
        total += product.price;
    });

    // Wyświetlanie całkowitej ceny
    cartTotalElement.textContent = `Całkowity koszt: ${total.toFixed(2)} zł`;
}

// Dodawanie funkcji do przycisków "Dodaj do koszyka"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productId = productCard.getAttribute('data-product-id');
        const productName = productCard.getAttribute('data-product-name');
        const productPrice = productCard.getAttribute('data-product-price');

        addToCart(productId, productName, productPrice);
    });
});
