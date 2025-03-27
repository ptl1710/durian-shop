import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../contexts/CartContext';

import styles from '../assets/styles/Home.module.css';

// Dummy data - bạn có thể thay thế bằng data thực từ API
const featuredProducts = [
  {
    id: 1,
    name: 'Sầu riêng Monthong Thái Lan',
    price: 250000,
    image: 'https://sauriengoi.vn/wp-content/uploads/2023/08/AdobeStock-93Q2EVldRH-e1697079899709.jpg',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Sầu riêng Ri6 Đắk Lắk',
    price: 180000,
    image: 'https://songanhfood.com/wp-content/uploads/2023/06/sau-ri6.jpg',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Bánh pía sầu riêng',
    price: 120000,
    image: 'https://cdn.tgdd.vn/Files/2021/08/06/1373509/cach-lam-banh-pia-sau-rieng-thom-ngon-cuc-de-lam-202108062000236493.jpg',
    rating: 4.7
  }
];

const categories = [
  {
    id: 1,
    name: 'Sầu riêng tươi',
    image: '/images/category-fresh.jpg'
  },
  {
    id: 2,
    name: 'Sản phẩm đông lạnh',
    image: '/images/category-frozen.jpg'
  },
  {
    id: 3,
    name: 'Bánh kẹo',
    image: '/images/category-candy.jpg'
  },
  {
    id: 4,
    name: 'Nước uống',
    image: '/images/category-drink.jpg'
  }
];

const testimonials = [
  {
    id: 1,
    text: 'Sầu riêng ở đây ngon nhất từ trước đến giờ tôi từng ăn, múi dày, hạt lép, vị ngọt đậm đà.',
    author: 'Chị Nguyễn Thị Hồng',
    role: 'Khách hàng thân thiết'
  },
  {
    id: 2,
    text: 'Dịch vụ giao hàng nhanh, đóng gói cẩn thận, sầu riêng về đến nhà vẫn tươi ngon.',
    author: 'Anh Trần Văn Nam',
    role: 'Khách hàng mới'
  },
  {
    id: 3,
    text: 'Bánh pía sầu riêng ở đây đúng chuẩn Sóc Trăng, nhân nhiều, vị ngọt vừa phải, rất đáng mua.',
    author: 'Chị Lê Thị Mai',
    role: 'Food Blogger'
  }
];

const Home = () => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = (product) => {
    setIsAdding(true);
    addToCart(product);

    // Hiệu ứng loading trong 500ms
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Banner Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Sầu Riêng Vương - Vua của các loại trái cây</h1>
        <p className={styles.heroSubtitle}>Chất lượng hàng đầu - Hương vị tuyệt hảo - Giao hàng tận nơi</p>
        <Link to="/products" className={styles.ctaButton}>Khám phá ngay</Link>
      </section>

      {/* Featured Products Section */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Sản phẩm nổi bật</h2>
        <div className={styles.featuredGrid}>
          {featuredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
                loading="lazy"
              />
              <div className={styles.productInfo}>
                <Link to={`/products/${product.id}`} className={styles.productName}>
                  {product.name}
                </Link>
                <div className={styles.productRating}>
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                  <span> ({product.rating})</span>
                </div>
                <p className={styles.productPrice}>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(product.price)}
                </p>
                <button
                  className={`${styles.addToCartButton} ${isAdding ? styles.adding : ''}`}
                  onClick={() => handleAddToCart(product)}
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
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <Link to="/products" className={styles.viewAllLink}>Xem tất cả sản phẩm →</Link>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Danh mục sản phẩm</h2>
        <div className={styles.categoryGrid}>
          {categories.map(category => (
            <Link
              to={`/products?category=${category.id}`}
              key={category.id}
              className={styles.categoryCard}
            >
              <img
                src={category.image}
                alt={category.name}
                className={styles.categoryImage}
                loading="lazy"
              />
              <div className={styles.categoryOverlay}>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>Khách hàng nói gì về chúng tôi</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              <p className={styles.testimonialRole}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotion Banner */}
      <section className={styles.promoSection}>
        <div className={styles.promoContent}>
          <h2 className={styles.promoTitle}>Giảm giá 20% cho đơn hàng đầu tiên</h2>
          <p className={styles.promoText}>Nhập mã <strong>WELCOME20</strong> khi thanh toán</p>
          <Link to="/products" className={styles.promoButton}>Mua ngay</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;