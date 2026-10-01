import React from 'react';

const ProductCard = ({ title, price, category }) => {
  return (
    <div className="product-card">
      <div className="product-category">{category}</div>
      <h3 className="product-title">{title}</h3>
      <div className="product-price">${price}</div>
    </div>
  );
};

export default ProductCard;
