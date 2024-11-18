// Przykładowe dane produktów
const products = [
    { id: 1, name: "HOODIE", price: 100, image: "bluza1.jpg" },
    { id: 2, name: "TEES", price: 70, image: "https://via.placeholder.com/440x660" },
    { id: 3, name: "DENIM", price: 69.99, image: "https://via.placeholder.com/440x660" },
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
  