import styles from "../assets/css/Header.module.css";
import classNames from "classnames";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <header>
      <Navbar className={styles.navbar} expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              activeKey={activeLink}
              onSelect={handleSelect}
            >
              <Nav.Link
                eventKey="home"
                className={`${styles.navLink} ${
                  activeLink === "home" ? styles.navLinkActive : ""
                }`}
              >
                Trang chủ
              </Nav.Link>
              <Nav.Link
                eventKey="notification"
                className={`${styles.navLink} ${
                  activeLink === "notification" ? styles.navLinkActive : ""
                }`}
              >
                Thông báo
              </Nav.Link>
              <Nav.Link
                eventKey="cart"
                className={`${styles.navLink} ${
                  activeLink === "cart" ? styles.navLinkActive : ""
                }`}
              >
                <FontAwesomeIcon icon={faCartShopping} /> Giỏ hàng
              </Nav.Link>
              <Nav.Link
                eventKey="login"
                className={`${styles.navLink} ${
                  activeLink === "login" ? styles.navLinkActive : ""
                }`}
              >
                Đăng nhập
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
