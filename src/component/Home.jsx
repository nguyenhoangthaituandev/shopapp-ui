import styles from "../assets/css/Home.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const selectCategoryCSS = classNames("form-control", styles.productCategory);
  const searchInputCSS = classNames("form-control", styles.searchInput);
  const productItemCSS = classNames(styles.productItem);

  return (
    <>
      <div className="container">
        <div className={styles.introSection}>
          <h1>Đây là trang home</h1>
          <p>Trang này hiển thị danh sách các sản phẩm kèm ảnh</p>
          <p>Các bạn có thể chọn sản phẩm và mua hàng tại đây</p>
        </div>

        {/* 1 ô search box bên trái, 1 combobox bên phải */}
        <div className={styles.searchBox}>
          <input
            type="text"
            className={searchInputCSS}
            placeholder="Tìm sản phẩm"
          />
          <select className={selectCategoryCSS}>
            <option selected disabled>
              Danh mục sản phẩm
            </option>
            <option>Đồ điện tử</option>
            <option>Laptop</option>
            <option>Điện thoại</option>
          </select>
        </div>

        {/** display product */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={productItemCSS}>
              <img
                src="https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="ProductImage"
                className={styles.productImage}
              />
              <h3 className={styles.productName}>Product 1</h3>
              <p className={styles.productDescription}>
                description for product
              </p>
              <p className={styles.productWarranty}>Bảo hành 12 tháng</p>
              <p className={styles.productPrice}>
                <del>$200</del> 100$
              </p>
              <div className={styles.productRating}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </div>
              <div className={styles.productActions}>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                <span className={styles.spaceX}></span>
                <button className="btn btn-success">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
