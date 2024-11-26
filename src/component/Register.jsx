import Footer from "./Footer";
import Header from "./Header";
import styles from "../assets/css/Register.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const containerCSS = classNames("container", styles.container);
    const RegisterFormCSS=classNames("mx-auto",styles.registerForm);
    const formControlCSS=classNames("form-control",styles.formControl);
    const passwordFieldCSS=classNames("form-group",styles.passwordField);
    const checkBoxTextCSS = classNames("form-check", styles.checkBoxText);

    return (
        <>
            <Header />
            <div className={containerCSS}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className={RegisterFormCSS}>
                            <h2 className={styles.registerHeader}>Đăng ký</h2>
                            <div className="form-group">
                                <label className={styles.labelText} for="email" >Email/Phone</label>
                                <input type="text" className={formControlCSS} id="email" placeholder="Enter your email"/>
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div className="mt-3"></div>
                            <div className={passwordFieldCSS}>
                                <label for="password">Mật khẩu</label>
                                <input type="password" placeholder="Ít nhất 3 ký tự" className={formControlCSS} id="password" />
                                <FontAwesomeIcon className={styles.passwordToggle} icon={faEyeSlash} />
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div className="mt-3"></div>
                            <div className={passwordFieldCSS}>
                                <label for="confirm-password">Gõ lại mật khẩu</label>
                                <input type="password" placeholder="Ít nhất 3 ký tự" className={formControlCSS} id="confirm-password"></input>
                                <FontAwesomeIcon className={styles.passwordToggle} icon={faEyeSlash} />
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div className="mt-3"></div>
                            <div className="form-group">
                                <label for="full-name">Họ và tên</label>
                                <input type="text" className={formControlCSS} id="full-name" placeholder="Enter your name" />
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div classname="mt-3"></div>
                            <div className="form-group">
                                <label for="address">Địa chỉ</label>
                                <input type="text" className={formControlCSS} id="address" placeholder="Enter your address"/>
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div className="form-group">
                                <div className={checkBoxTextCSS}>
                                    <span style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}>
                                        <input type="checkbox" classname={styles.formCheckInput} id="agree" />
                                        <label className="form-check-label text-start" for="agree">Tôi đồng ý với các điều khoản</label>
                                    </span>
                                </div>
                            </div>
                            <button type="button" className={styles.registerButton}>Đăng ký</button>
                            <div className={styles.divider}></div>
                            <p className="text-center">Bạn đã có tài khoản? <span><a href="" className={styles.registerLink}>Đăng nhập</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;