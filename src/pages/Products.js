import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import styles from '../assets/styles/Products.module.css';

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Dummy data - Thay thế bằng API call thực tế
  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: 'Sầu riêng Monthong Thái Lan',
        price: 250000,
        category: 'fresh',
        image: 'https://sauriengoi.vn/wp-content/uploads/2023/08/AdobeStock-93Q2EVldRH-e1697079899709.jpg',
        rating: 4.5,
        description: 'Sầu riêng nhập khẩu từ Thái Lan, múi dày, hạt lép'
      },
      {
        id: 2,
        name: 'Sầu riêng Ri6 Đắk Lắk',
        price: 180000,
        category: 'fresh',
        image: 'https://songanhfood.com/wp-content/uploads/2023/06/sau-ri6.jpg',
        rating: 4.2,
        description: 'Sầu riêng đặc sản Tây Nguyên, vị béo ngậy'
      },
      {
        id: 3,
        name: 'Bánh pía sầu riêng',
        price: 120000,
        category: 'cake',
        image: 'https://cdn.tgdd.vn/Files/2021/08/06/1373509/cach-lam-banh-pia-sau-rieng-thom-ngon-cuc-de-lam-202108062000236493.jpg',
        rating: 4.7,
        description: 'Bánh pía đặc sản Sóc Trăng, nhân sầu riêng thơm ngon'
      },
      {
        id: 4,
        name: 'Kẹo sầu riêng',
        price: 80000,
        category: 'candy',
        image: 'https://traicaynhapkhaububu.com/wp-content/uploads/2022/12/K%E1%BA%B8O-S%E1%BA%A6U-RI%C3%8ANG-COSCO-160gr-%C4%90%C3%80I-LOAN-2.jpg',
        rating: 4.0,
        description: 'Kẹo sầu riêng thơm ngon, đóng gói tiện lợi'
      },
      {
        id: 5,
        name: 'Sầu riêng đông lạnh',
        price: 150000,
        category: 'frozen',
        image: 'https://chanhleobazan.com/upload/hinhthem/z5707165448401db1b1eb2cd5f50becbc02207f9d315f5-5835.jpg',
        rating: 4.3,
        description: 'Sầu riêng cấp đông, tiện dụng'
      },
      {
        id: 6,
        name: 'Bánh kem sầu riêng',
        price: 200000,
        category: 'cake',
        image: 'https://friendshipcakes.com/wp-content/uploads/2022/05/BANH-SAU-RIENG-TUOI-NGUYEN-MUI-e1651636517344.jpg.webp',
        rating: 4.8,
        description: 'Bánh kem tươi với sầu riêng thật'
      }
    ];

    setProducts(dummyProducts);
    setFilteredProducts(dummyProducts);
    setLoading(false);
  }, []);

  // Xử lý filter từ URL parameter
  useEffect(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      const category = searchParams.get('category');
      if (category) {
        setSelectedCategories([category]);
      }
    }
  }, [location]);

  // Filter sản phẩm theo category và price range
  useEffect(() => {
    let result = [...products];

    // Filter theo category
    if (selectedCategories.length > 0) {
      result = result.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter theo price range
    result = result.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sắp xếp sản phẩm
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Mặc định sắp xếp theo id
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredProducts(result);
  }, [products, selectedCategories, priceRange, sortOption]);

  // Categories data
  const categories = [
    { id: 'fresh', name: 'Sầu riêng tươi' },
    { id: 'frozen', name: 'Đông lạnh' },
    { id: 'cake', name: 'Bánh ngọt' },
    { id: 'candy', name: 'Kẹo' }
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handlePriceChange = (e, index) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev =>
      index === 0 ? [value, prev[1]] : [prev[0], value]
    );
  };

  if (loading) {
    return <div className={styles.loading}>Đang tải sản phẩm...</div>;
  }

  return (
    <div className={styles.productsPage}>
      <div className={styles.filterSidebar}>
        <h3 className={styles.filterTitle}>Bộ lọc</h3>

        {/* Lọc theo danh mục */}
        <div className={styles.filterGroup}>
          <h4 className={styles.filterSubtitle}>Danh mục</h4>
          <div className={styles.categoryList}>
            {categories.map(category => (
              <label key={category.id} className={styles.categoryItem}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Lọc theo giá */}
        <div className={styles.filterGroup}>
          <h4 className={styles.filterSubtitle}>Khoảng giá</h4>
          <div className={styles.priceRange}>
            <input
              type="range"
              min="0"
              max="500000"
              step="50000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
            />
            <input
              type="range"
              min="0"
              max="500000"
              step="50000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
            />
            <div className={styles.priceValues}>
              <span>{priceRange[0].toLocaleString()}đ</span>
              <span>{priceRange[1].toLocaleString()}đ</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productsMain}>
        <div className={styles.productsHeader}>
          <h2 className={styles.pageTitle}>Tất cả sản phẩm</h2>
          <div className={styles.sortOptions}>
            <label>Sắp xếp theo:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá thấp đến cao</option>
              <option value="price-desc">Giá cao đến thấp</option>
              <option value="rating">Đánh giá cao nhất</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className={styles.noResults}>
            <p>Không tìm thấy sản phẩm phù hợp</p>
            <button
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 500000]);
              }}
              className={styles.resetButton}
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                className={styles.productCard}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;