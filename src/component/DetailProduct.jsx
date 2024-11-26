import Footer from "./Footer";
import Header from "./Header";
import styles from "../assets/css/DetailProduct.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const DetailProduct = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.introSection}>
                    <h1>This is Detail Product</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="square-image">
                                        <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            className={styles.productImage}
                                            alt="Product Image"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="square-image">
                                        <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            className={styles.productImage}
                                            alt="Product Image"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="square-image">
                                        <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            className={styles.productImage}
                                            alt="Product Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </div>
                        <div className="row">
                            <div className={styles.thumbnailContainer}>
                                <div className={`${styles.thumbnailItem} ${styles.active}`}>
                                    <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className={styles.thumbnailImage}
                                        alt="Product Image"
                                    />
                                </div>
                                <div className={styles.thumbnailItem}>
                                    <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className={styles.thumbnailImage}
                                        alt="Product Image"
                                    />
                                </div>
                                <div className={styles.thumbnailItem}>
                                    <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className={styles.thumbnailImage}
                                        alt="Product Image"
                                    />
                                </div>
                                <div className={styles.thumbnailItem}>
                                    <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className={styles.thumbnailImage}
                                        alt="Product Image"
                                    />
                                </div>
                                <div className={styles.thumbnailItem}>
                                    <img src="https://images.pexels.com/photos/4050426/pexels-photo-4050426.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        className={styles.thumbnailImage}
                                        alt="Product Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.productDetail}>
                            <h2>Thông tin chi tiết sản phẩm</h2>
                            <p>Mô tả sản phẩm</p>
                            <p>Giá: $99</p>
                            <div className={styles.productAction}>
                                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                                <button className="btn btn-success">Mua ngay</button>
                            </div>
                            <div className={styles.productQuantity}>
                                <div className="border-wrapper">
                                    <button>-</button>
                                    <input type="text" value="1"/>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetailProduct;