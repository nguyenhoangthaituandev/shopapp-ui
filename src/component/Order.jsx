import Footer from "./Footer";
import Header from "./Header";
import styles from "../assets/css/Order.module.css";
import classNames from "classnames";

const Order = () => {
  const containerCSS=classNames("container",styles.container);
  const formControlCSS = classNames("form-control", styles.formControl);
  const formLabelCSS = classNames("form-label", styles.formLabel);
  const buttonCSS=classNames("btn ",styles.btnGradient);

  return (
    <>
      <Header />
      <div class={containerCSS}>
        <div class={styles.introSection}>
          <h1>Đây là trang Order</h1>
          <p>Sử dụng Bootstrap</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.productHeader}>Thông tin người nhận</h2>
            <form>
              <div class="mb-3">
                <label for="name" className={formLabelCSS}>
                  Họ và tên
                </label>
                <input type="text" className={formControlCSS} id="name" placeholder="Nhập họ và tên"/>
              </div>
              <div class="mb-3">
                <label for="email" className={formLabelCSS}>
                  Email
                </label>
                <input type="email" className={formControlCSS} id="email" placeholder="Nhập email"/>
              </div>
              <div class="mb-3">
                <label for="phone" className={formLabelCSS}>
                  Số điện thoại
                </label>
                <input type="text" className={formControlCSS} id="phone" placeholder="Nhập số điện thoại"/>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h2 className={styles.productOrder}>Sản phẩm đã đặt hàng</h2>
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
            <div className="text-start mt-3">
                <h4 className="header-text text-end">Tổng giá: 800 000 đ</h4>
            </div>
            <div className="mt-3">
                <h4 className={styles.productHeader}>Nhập coupon</h4>
                <div className="input-group">
                    <input type="text" className={formControlCSS} placeholder="Nhập coupon"/>
                    <button className={buttonCSS} type="button">Áp dụng</button>
                </div>
            </div>
            <div className="text-start mt-3">
                <button className={buttonCSS} type="button">Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
