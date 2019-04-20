import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <div className="homeTitle">Hello</div>
          </Col>
          <Col md={6}>
            <img
              alt="flag"
              className="homeFlag"
              src="https://images.newrepublic.com/217eef3ca5e46a0ae3da23d061505fa121c23a40.jpeg?w=1200&q=65&dpi=2.625&fm=pjpg&fit=crop&crop=faces&h=800"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={2} />
              <Col md={8}>
                <Link to="/family">
                  <Button type="danger btn-lg" className="fButton" id="family">
                    Emma's Friends
                  </Button>
                </Link>
              </Col>
              <Col md={2} />
            </Row>
            <Row>
              <Col md={2} />
              <Col md={8}>
              <Link to="/rheas">
                  <Button type="danger btn-lg" className="fButton" id="rheas">
                    Rhea's Friends
                  </Button>
                </Link>
              </Col>
              <Col md={2} />
            </Row>
            <Row>
              <Col md={2} />
              <Col md={8}>
              <Link to="/candler">
                  <Button type="danger btn-lg" className="fButton" id="candler">
                    Candler's Friends
                  </Button>
                </Link>
              </Col>
              <Col md={2} />
            </Row>
            <Row>
              <Col md={2} />
              <Col md={8}>
                <Link to="/board">
                  <Button type="danger btn-lg" className="fButton" id="board">
                    Leader Board
                  </Button>
                </Link>
              </Col>
              <Col md={2} />
            </Row>
          </Col>
          <Col md={6}>
            <div className="homeTitle">Friends</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
