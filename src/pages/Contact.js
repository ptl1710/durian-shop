import React, { useState } from 'react';

import styles from '../assets/styles/Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form ở đây
        alert(`Cảm ơn bạn ${formData.name} đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.`);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.contactHeader}>
                <h1>Liên Hệ Với Chúng Tôi</h1>
                <p>Mọi thắc mắc xin vui lòng gửi cho chúng tôi</p>
            </div>

            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h2>Thông tin liên hệ</h2>
                    <div className={styles.infoItem}>
                        <h3>Địa chỉ</h3>
                        <p>123 Đường Sầu Riêng, Phường Trái Cây, Quận Ngon, TP.HCM</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Điện thoại</h3>
                        <p>0909 123 456</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Email</h3>
                        <p>info@sauriengvuong.com</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>Giờ mở cửa</h3>
                        <p>Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                        <p>Chủ nhật: 8:00 - 12:00</p>
                    </div>
                </div>

                <div className={styles.contactForm}>
                    <h2>Gửi tin nhắn cho chúng tôi</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Họ và tên</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Số điện thoại</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Nội dung</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Gửi tin nhắn</button>
                    </form>
                </div>
            </div>

            <div className={styles.contactMap}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789012!2d106.12345678901234!3d10.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzI0LjQiTiAxMDbCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;