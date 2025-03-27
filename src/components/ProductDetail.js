import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaChevronLeft, FaShoppingCart, FaHeart } from 'react-icons/fa';

import { useCart } from '../contexts/CartContext';

import styles from '../assets/styles/ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Fetch product data - thay bằng API call thực tế
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Giả lập API call
        const dummyProducts = [
          {
            id: 1,
            name: 'Sầu riêng Monthong Thái Lan',
            price: 250000,
            category: 'fresh',
            images: [
              '/images/monthong-1.jpg',
              '/images/monthong-2.jpg',
              '/images/monthong-3.jpg'
            ],
            rating: 4.5,
            description: 'Sầu riêng nhập khẩu từ Thái Lan, múi dày, hạt lép',
            details: 'Xuất xứ: Thái Lan\nTrọng lượng: 2-3kg/quả\nBảo quản: Nơi thoáng mát',
            reviews: [
              { id: 1, user: 'Nguyễn Văn A', rating: 5, comment: 'Sầu riêng ngon, múi dày', date: '2023-05-15' },
              { id: 2, user: 'Trần Thị B', rating: 4, comment: 'Vị ngọt đậm, hơi ít múi', date: '2023-05-10' }
            ]
          },
          // ... thêm các sản phẩm khác
        ];

        const foundProduct = dummyProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          navigate('/not-found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity
    });
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Đang tải sản phẩm...</div>;
  }

  if (!product) {
    return <div className={styles.notFound}>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        <FaChevronLeft /> Quay lại
      </button>

      <div className={styles.productMain}>
        {/* Gallery ảnh sản phẩm */}
        <div className={styles.productGallery}>
          <div className={styles.thumbnailContainer}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div className={styles.mainImageContainer}>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className={styles.mainImage}
            />
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>

          <div className={styles.productRating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.floor(product.rating) ? '#f1c40f' : '#ddd'}
                />
              ))}
            </div>
            <span className={styles.ratingText}>
              {product.rating} ({product.reviews.length} đánh giá)
            </span>
          </div>

          <div className={styles.productPrice}>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND'
            }).format(product.price)}
          </div>

          <div className={styles.productDescription}>
            <h3>Mô tả sản phẩm</h3>
            <p>{product.description}</p>
          </div>

          <div className={styles.productDetails}>
            <h3>Chi tiết</h3>
            <pre>{product.details}</pre>
          </div>

          {/* Thêm vào giỏ hàng */}
          <div className={styles.addToCartSection}>
            <div className={styles.quantityControl}>
              <button onClick={decreaseQuantity} className={styles.quantityButton}>-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={increaseQuantity} className={styles.quantityButton}>+</button>
            </div>

            <button
              onClick={handleAddToCart}
              className={styles.addToCartButton}
            >
              <FaShoppingCart /> Thêm vào giỏ
            </button>

            <button
              className={`${styles.wishlistButton} ${isWishlisted ? styles.active : ''}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <FaHeart />
              {isWishlisted ? 'Đã thích' : 'Yêu thích'}
            </button>
          </div>
        </div>
      </div>

      {/* Đánh giá sản phẩm */}
      <div className={styles.reviewsSection}>
        <h2>Đánh giá sản phẩm</h2>

        {product.reviews.length > 0 ? (
          <div className={styles.reviewsList}>
            {product.reviews.map(review => (
              <div key={review.id} className={styles.reviewItem}>
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewUser}>{review.user}</span>
                  <div className={styles.reviewRating}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < review.rating ? '#f1c40f' : '#ddd'} />
                    ))}
                  </div>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
                <p className={styles.reviewComment}>{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noReviews}>Chưa có đánh giá nào</p>
        )}
      </div>

      {/* Sản phẩm liên quan */}
      <div className={styles.relatedProducts}>
        <h2>Sản phẩm liên quan</h2>
        {/* Component hiển thị sản phẩm liên quan */}
      </div>
    </div>
  );
};

export default ProductDetail;