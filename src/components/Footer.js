import React from 'react';

import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import styles from '../assets/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Thông tin cửa hàng */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Sầu Riêng Vương</h3>
                    <p className={styles.footerDescription}>
                        Chuyên cung cấp các sản phẩm sầu riêng chất lượng cao, đảm bảo an toàn vệ sinh thực phẩm.
                    </p>
                    <div className={styles.footerSocial}>
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener" >
                            <FaFacebook className={styles.socialIcon} />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener" >
                            <FaInstagram className={styles.socialIcon} />
                        </a>
                        <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener" >
                            <FaYoutube className={styles.socialIcon} />
                        </a>
                    </div>
                </div>

                {/* Liên kết nhanh */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Liên kết nhanh</h3>
                    <ul className={styles.footerLinks}>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/products">Sản phẩm</a></li>
                        <li><a href="/about">Về chúng tôi</a></li>
                        <li><a href="/contact">Liên hệ</a></li>
                        <li><a href="/policy">Chính sách bảo mật</a></li>
                    </ul>
                </div>

                {/* Thông tin liên hệ */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Liên hệ</h3>
                    <ul className={styles.footerContact}>
                        <li>
                            <FaMapMarkerAlt className={styles.contactIcon} />
                            <span>123 Đường Sầu Riêng, Quận 1, TP.HCM</span>
                        </li>
                        <li>
                            <FaPhone className={styles.contactIcon} />
                            <span>0909 123 456</span>
                        </li>
                        <li>
                            <FaEnvelope className={styles.contactIcon} />
                            <span>info@sauriengvuong.com</span>
                        </li>
                    </ul>
                </div>

                {/* Giờ mở cửa */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Giờ mở cửa</h3>
                    <ul className={styles.footerHours}>
                        <li><span>Thứ 2 - Thứ 6:</span> <span>8:00 - 18:00</span></li>
                        <li><span>Thứ 7:</span> <span>8:00 - 12:00</span></li>
                        <li><span>Chủ nhật:</span> <span>Nghỉ</span></li>
                    </ul>
                </div>
            </div>

            {/* Bản quyền */}
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Sầu Riêng Vương. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;