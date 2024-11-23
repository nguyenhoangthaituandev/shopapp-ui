import styles from "../assets/css/Home.module.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className={styles.introSection}>
          <div>
            <h1>Đây là trang home</h1>
            <p>Trang này hiển thị danh sách các sản phẩm kèm ảnh</p>
            <p>Các bạn có thể chọn sản phẩm và mua hàng tại đây</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
