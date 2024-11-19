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
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent.replace(' zł', '');

        addToCart(productId, productName, productPrice);
    });
});

// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Zatrzymuje domyślne działanie linku
        const targetId = this.getAttribute('href').substring(1); // Pobiera ID sekcji
        const targetElement = document.getElementById(targetId); // Znajduje sekcję o tym ID
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Płynne przewijanie
                block: 'start', // Ustawia przewinięcie na górze sekcji
            });
        }
    });
});

