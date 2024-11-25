import Footer from "./Footer";
import Header from "./Header";
import styles from "../assets/css/OrderConfirm.module.css";
import classNames from "classnames";

const OrderConfirm = () => {
  const containerCSS = classNames("container", styles.container);
  const buttonCSS = classNames("btn ", styles.btnGradient);

  return (
    <>
      <Header />
      <div className={containerCSS}>
        <div class={styles.confirmationContainer}>
          <h1>Xác nhận đơn hàng</h1>
          <p>
            Cảm ơn bạn đã đặt hàng! Dưới đây là thông tin chi tiết về đơn hàng
            của bạn
          </p>
        </div>
        <div className="row">
          <table>
            <thead>
              <tr>
                <th scope="col" className="text-start">
                  Sản phẩm
                </th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Tổng giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.productInfo}>
                    <img
                      src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="ProductImage"
                      className={styles.productImage}
                    />
                    <span className={styles.productName}>Tên sản phẩm</span>
                  </div>
                </td>
                <td>2</td>
                <td>100,000 đ</td>
                <td>200,000 đ</td>
              </tr>

              <tr>
                <td>
                  <div className={styles.productInfo}>
                    <img
                      src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="ProductImage"
                      className={styles.productImage}
                    />
                    <span className={styles.productName}>Tên sản phẩm</span>
                  </div>
                </td>
                <td>2</td>
                <td>100,000 đ</td>
                <td>200,000 đ</td>
              </tr>

              <tr>
                <td>
                  <div className={styles.productInfo}>
                    <img
                      src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="ProductImage"
                      className={styles.productImage}
                    />
                    <span className={styles.productName}>Tên sản phẩm</span>
                  </div>
                </td>
                <td>2</td>
                <td>100,000 đ</td>
                <td>200,000 đ</td>
              </tr>

              <tr>
                <td>
                  <div className={styles.productInfo}>
                    <img
                      src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="ProductImage"
                      className={styles.productImage}
                    />
                    <span className={styles.productName}>Tên sản phẩm</span>
                  </div>
                </td>
                <td>2</td>
                <td>100,000 đ</td>
                <td>200,000 đ</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-3">
            <button class={buttonCSS} type="button">Tiếp tục mua sắm</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderConfirm;
