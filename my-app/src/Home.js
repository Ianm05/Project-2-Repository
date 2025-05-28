import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home-hero">
      <div className="hero-overlay">
        <div className="container home-page">
          <h1>Welcome to the Laptop Store</h1>
          <p>
            Discover the best laptops for work, school, and play.<br />
            Explore our collection of high-performance laptops tailored to your needs.
          </p>

          <div className="logo-container">
            <Link to="/" className="logo-text">Laptop Store</Link>
          </div>

          <Link to="/products">
            <button className="shop-button">Shop Now</button>
          </Link>

          <img
            src="/images/hero-laptop.jpg"
            alt="Laptop Showcase"
            className="home-banner"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
