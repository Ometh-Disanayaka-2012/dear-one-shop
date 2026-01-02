import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <div className="placeholder">{product.image}</div>
      </div>
      <h3>{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button 
        className="add-to-cart"
        onClick={() => onAddToCart && onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;