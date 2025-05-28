import React, { useState } from 'react';
import './App.css';


const laptops = [
  {
    id: 1,
    name: "Ultrabook Pro",
    specs: "Intel i7, 16GB RAM, 512GB SSD",
    price: 1299,
    image: "/images/laptop1.jpg"
  },
  {
    id: 2,
    name: "MacBook Lite",
    specs: "Intel i5, 8GB RAM, 256GB SSD",
    price: 899,
    image: "/images/laptop2.jpg"
  },
  {
    id: 3,
    name: "Gaming Beast X",
    specs: "Ryzen 9, RTX 3080, 32GB RAM",
    price: 1999,
    image: "/images/laptop3.jpg"
  },
  {
    id: 4,
    name: "Everyday Chromebook",
    specs: "Intel Celeron, 4GB RAM, 64GB SSD",
    price: 299,
    image: "/images/laptop4.jpg"
  },
  {
    id: 5,
    name: "StudioBook Creator",
    specs: "Intel i9, 32GB RAM, 1TB SSD",
    price: 2299,
    image: "/images/laptop5.jpg"
  },
  {
    id: 6,
    name: "TravelMate Slim",
    specs: "AMD Ryzen 5, 8GB RAM, 256GB SSD",
    price: 649,
    image: "/images/laptop6.jpg"
  }
];
function Products({ addToCart }) {
  const [message, setMessage] = useState('');
    <div className="products-section">
      <div className="section-header">
        <h2>Explore Our Laptops</h2>
        <p>High performance. Sleek design. Built for your lifestyle.</p>
      </div>

      <div className="container">
        <div className="product-grid">
          {laptops.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.specs}</p>
              <p><strong>${product.price}</strong></p>
              <button onClick={() => {
  addToCart(product);
  setMessage(`${product.name} added to cart!`);

  // Clear the message after 2 seconds
  setTimeout(() => setMessage(''), 2000);
}}>
  Add to Cart
</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
