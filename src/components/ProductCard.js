import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Thêm hiệu ứng loading trong 500ms
    setTimeout(() => {
      addToCart({
        ...product,
        quantity: 1
      });
      message.success(`${product.name} đã được thêm vào giỏ hàng`);
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className={styles.productCard}>
      {/* Wishlist Button */}
      <button 
        className={`${styles.wishlistButton} ${isWishlisted ? styles.active : ''}`}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <FaHeart />
      </button>

      {/* Product Image with Link to Detail */}
      <Link to={`/products/${product.id}`} className={styles.imageLink}>
        <div className={styles.productImageContainer}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={styles.productImage}
            loading="lazy"
          />
          {product.isNew && <span className={styles.productBadge}>Mới</span>}
        </div>
      </Link>

      {/* Product Info */}
      <div className={styles.productInfo}>
        <Link to={`/products/${product.id}`} className={styles.productName}>
          {product.name}
        </Link>
        
        {/* Rating */}
        <div className={styles.productRating}>
          <div className={styles.ratingStars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < Math.floor(product.rating) ? '#f1c40f' : '#ddd'} />
            ))}
          </div>
          <span className={styles.ratingCount}>({product.rating})</span>
        </div>

        {/* Price */}
        <div className={styles.productPriceContainer}>
          <div>
            <span className={styles.currentPrice}>
              {new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'VND' 
              }).format(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className={styles.originalPrice}>
                  {new Intl.NumberFormat('vi-VN', { 
                    style: 'currency', 
                    currency: 'VND' 
                  }).format(product.originalPrice)}
                </span>
                <span className={styles.discountPercentage}>
                  {Math.round((1 - product.price/product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          className={`${styles.addToCartButton} ${isAdding ? styles.adding : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? (
            'Đang thêm...'
          ) : (
            <>
              <FaShoppingCart />
              Thêm vào giỏ
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;