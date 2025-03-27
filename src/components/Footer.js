import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/n1.svg';
import navIcon2 from '../assets/img/n2.svg';
import navIcon3 from '../assets/img/n3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/nannapath19476/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://web.facebook.com/nannapath.asma"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p style={{ color: ' #424689' }}>Template by <a href="https://github.com/judygab" target="_blank" rel="noopener noreferrer" style={{ color: ' #424689' }}>judygab</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
