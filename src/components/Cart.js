import React from 'react';

import { useCart } from '../contexts/CartContext';

import styles from '../assets/styles/Cart.module.css';

const CartDropdown = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();

  return (
    <div className={styles.cartDropdown}>
      <h3 className={styles.cartTitle}>Giỏ hàng của bạn</h3>

      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Giỏ hàng trống</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <h4>{item.name}</h4>
                  <div className={styles.cartItemPrice}>
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    }).format(item.price)}
                  </div>
                  <div className={styles.cartItemActions}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeButton}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.cartTotal}>
              <span>Tổng cộng:</span>
              <span>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND'
                }).format(cartTotal)}
              </span>
            </div>
            <button className={styles.checkoutButton}>
              Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;