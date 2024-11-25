import styles from "../assets/css/Footer.module.css";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className={classNames("row", styles.footerDescription)}>
            <div className="col-md-6">
              <p>&copy; 2024 Your Company, All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <p className="text-end">Terms of Service | Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
