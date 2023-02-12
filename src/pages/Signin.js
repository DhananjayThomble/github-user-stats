import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const context = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  const handleSignUp = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged In user:- ", user);
        toast.success("Logged In");

        context.setUser({ email: user.email, uid: user.uid });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.error(error);
      });
  };
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <Card.Header className="">SignIn here</Card.Header>
              <Card.Body>
                <Form.Group row>
                  <FloatingLabel label="Email address" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel label="Password">
                    <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Card.Body>

              <Card.Footer>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">
                    Sign In
                  </button>
                </div>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
