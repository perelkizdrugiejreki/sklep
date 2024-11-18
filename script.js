<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep internetowy</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script> <!-- Dodajemy nasz skrypt -->
</head>
<body>

    <div class="container">
        <h1>Wszystkie Produkty</h1>

        <div class="product-grid">
            <!-- Produkt 1 -->
            <div class="product-card" data-product-id="1" data-product-name="Produkt 1" data-product-price="99.99">
                <img src="images/product1.jpg" alt="Produkt 1">
                <h2>Produkt 1</h2>
                <p class="product-price">99,99 zł</p>
                <button class="add-to-cart">Dodaj do koszyka</button>
            </div>

            <!-- Produkt 2 -->
            <div class="product-card" data-product-id="2" data-product-name="Produkt 2" data-product-price="149.99">
                <img src="images/product2.jpg" alt="Produkt 2">
                <h2>Produkt 2</h2>
                <p class="product-price">149,99 zł</p>
                <button class="add-to-cart">Dodaj do koszyka</button>
            </div>

            <!-- Produkt 3 -->
            <div class="product-card" data-product-id="3" data-product-name="Produkt 3" data-product-price="79.99">
                <img src="images/product3.jpg" alt="Produkt 3">
                <h2>Produkt 3</h2>
                <p class="product-price">79,99 zł</p>
                <button class="add-to-cart">Dodaj do koszyka</button>
            </div>

            <!-- Dodaj kolejne produkty tutaj -->
        </div>

        <div class="cart">
            <h2>Twój Koszyk</h2>
            <ul id="cart-items"></ul>
            <p id="cart-total">Całkowity koszt: 0,00 zł</p>
        </div>
    </div>

</body>
</html>

  