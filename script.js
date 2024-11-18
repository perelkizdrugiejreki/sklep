// Przykładowe dane produktów
const products = [
    { id: 1, name: "Produkt 1", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Produkt 2", price: 49.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Produkt 3", price: 19.99, image: "https://via.placeholder.com/150" },
  ];
  
  // Funkcja do generowania produktów
  const productContainer = document.getElementById("products");
  
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price} zł</p>
      <button onclick="addToCart(${product.id})">Dodaj do koszyka</button>
    `;
    productContainer.appendChild(productDiv);
  });
  
  // Koszyk
  const cart = [];
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      alert(`${product.name} został dodany do koszyka!`);
    }
  }
  