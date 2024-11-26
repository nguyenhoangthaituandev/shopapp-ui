import Footer from "./Footer";
import Header from "./Header";
import styles from "../assets/css/Login.module.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const containerCSS = classNames("container", styles.container);
    const loginFormCSS = classNames("mx-auto", styles.loginForm);
    const formControlCSS = classNames("form-control", styles.formControl);
    const passwordFieldCSS = classNames("form-group", styles.passwordField);
    const checkBoxTextCSS = classNames("form-check", styles.checkBoxText);
    const accessRightCSS = classNames(
        "form-control",
        styles.formControl,
        styles.accessRight
    );
    return (
        <>
            <Header />
            <div className={containerCSS}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className={loginFormCSS}>
                            <h2 className={styles.loginHeader}>Đăng nhập</h2>
                            <div className="form-group">
                                <label htmlFor="email">Email/Phone</label>
                                <input
                                    type="text"
                                    className={formControlCSS}
                                    id="email"
                                    placeholder="Enter your email"
                                ></input>
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div className="mt-4"></div>
                            <div className={passwordFieldCSS}>
                                <label for="password">Mật khẩu</label>
                                <input
                                    type="password"
                                    placeholder="Ít nhất 3 ký tự"
                                    className={formControlCSS}
                                    id="password"
                                ></input>
                                <FontAwesomeIcon
                                    className={styles.passwordToggle}
                                    icon={faEyeSlash}
                                />
                                <div className={styles.dividerNospace}></div>
                            </div>
                            <div className="form-group">
                                <div className={checkBoxTextCSS}>
                                    <span
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            className={styles.formCheckInput}
                                            id="remember"
                                        ></input>
                                        <label
                                            className="form-check-label text-start"
                                            htmlFor="remember"
                                        >
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </span>

                                    <a href="#" className={styles.registerLink}>
                                        Quên mật khẩu
                                    </a>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <select className={accessRightCSS}>
                                    <option selected disabled>
                                        Quyền đăng nhập
                                    </option>
                                    <option>Người dùng</option>
                                    <option>Quản trị viên</option>
                                </select>
                            </div>
                            <button type="button" className={styles.loginButton}>
                                Đăng nhập
                            </button>
                            <div className={styles.divider}></div>
                            <p className="text-center">
                                Bạn chưa đăng ký?
                                <span>
                                    <a href="#" className={styles.registerLink}>
                                        Tạo tài khoản
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
