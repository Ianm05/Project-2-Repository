import React from 'react';
import './App.css';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-section">
      <div className="section-header">
        <h2>Your Cart</h2>
        <p>Review your selected laptops before checking out.</p>
      </div>

      <div className="container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="product-grid">
            {cartItems.map(item => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.specs}</p>
                <p><strong>${item.price}</strong></p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
