import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import styles from "./Mystyle.module.css";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MyNavbar() {
    


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.container}>
            <Link to={"/"} className={styles.link}>
              My Contact
            </Link>
          </Navbar.Brand>
          <Link to={"/add"}>
            <BsFillPersonPlusFill className={styles.icon} />
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}
