import React from 'react';

import styles from '../assets/styles/About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHeader}>
        <h1>Về Chúng Tôi</h1>
        <p>Đam mê sầu riêng - Chất lượng tạo nên thương hiệu</p>
      </div>

      <div className={styles.aboutContent}>
        <section className={styles.aboutStory}>
          <h2>Câu chuyện của chúng tôi</h2>
          <p>
            Sầu Riêng Vương được thành lập năm 2015 với sứ mệnh mang đến những sản phẩm 
            sầu riêng chất lượng cao nhất cho người tiêu dùng. Xuất phát từ tình yêu với 
            loại trái cây đặc biệt này, chúng tôi đã dành nhiều năm nghiên cứu và phát 
            triển các sản phẩm từ sầu riêng.
          </p>
          <p>
            Hiện nay, chúng tôi tự hào là một trong những nhà cung cấp sầu riêng và các 
            sản phẩm từ sầu riêng hàng đầu tại Việt Nam.
          </p>
        </section>

        <section className={styles.aboutMission}>
          <h2>Sứ mệnh của chúng tôi</h2>
          <ul>
            <li>Cung cấp sầu riêng tươi ngon nhất từ các vườn trồng uy tín</li>
            <li>Phát triển đa dạng các sản phẩm từ sầu riêng</li>
            <li>Đảm bảo chất lượng và an toàn vệ sinh thực phẩm</li>
            <li>Mang đến trải nghiệm mua sắm tuyệt vời cho khách hàng</li>
          </ul>
        </section>

        <section className={styles.aboutTeam}>
          <h2>Đội ngũ của chúng tôi</h2>
          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <div className={styles.memberAvatar}>NV</div>
              <h3>Nguyễn Văn A</h3>
              <p>Chuyên gia sầu riêng</p>
            </div>
            <div className={styles.member}>
              <div className={styles.memberAvatar}>LT</div>
              <h3>Lê Thị B</h3>
              <p>Quản lý chất lượng</p>
            </div>
            <div className={styles.member}>
              <div className={styles.memberAvatar}>PT</div>
              <h3>Phạm Văn C</h3>
              <p>Chuyên gia chế biến</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;