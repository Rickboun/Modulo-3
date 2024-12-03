
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="product-price">${product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
