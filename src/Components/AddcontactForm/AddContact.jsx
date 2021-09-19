import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import {
  BsFillPersonFill,
  BsBuilding,
  BsFillDropletFill,
} from "react-icons/bs";
import { FaMobileAlt, FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Mystyle.module.css";

export default function AddContact() {
  const [fistname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phnum1, setPhnum1] = useState("");
  const [phnum2, setPhnum2] = useState("");
  const [company, setCompany] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [dob, setDob] = useState("");

  const submitHandler = () => {
    console.log(
      fistname +
        " " +
        lastname +
        " " +
        email +
        " " +
        phnum1 +
        " " +
        phnum2 +
        " " +
        company +
        " " +
        bloodgroup +
        " " +
        dob
    );

    const dataJSON = {
        name : fistname+" "+lastname,
        email : email,
        mobile1 : phnum1,
        mobile2 : phnum2,
        company : company,
        bloodgroup : bloodgroup,
        dob : dob.toString()
    }

    console.log("JSON "+dataJSON);

    axios.post('http://localhost:8082/contact/addall', dataJSON)
    .then(response => {
        if(response.data!=null){
            alert('Details saved successfully ')
        }
    })
    .catch(err=>{
        console.log(err.response);
        console.log(err.response.data);
        console.log(err.response.message);
    })
  };

  return (
    <div>
      <Form autoComplete="off">
        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <BsFillPersonFill className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="First Name"
              autoComplete="off"
              onChange={(e) => {
                  
                setFirstname(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Last Name"
              autoComplete="off"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <FaMobileAlt className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Phone Number 1"
              autoComplete="off"
              onChange={(e) => {
                setPhnum1(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <FaMobileAlt className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Phone Number 2"
              autoComplete="off"
              onChange={(e) => {
                setPhnum2(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <MdEmail className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <BsBuilding className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Company"
              autoComplete="off"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <BsFillDropletFill className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Blood Groop"
              autoComplete="off"
              onChange={(e) => {
                setBloodgroup(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col sm={2} xs={2}>
            <FaCalendarAlt className={styles.icon} />
          </Col>
          <Col>
            <Form.Control
              type="date"
              autoComplete="off"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col>
            <Button variant="primary" onClick={submitHandler}>
              Save
            </Button>
            <Button variant="danger">Reset</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
