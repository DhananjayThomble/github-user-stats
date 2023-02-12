import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const context = useContext(UserContext);
  const [userName, setUserName] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.user?.uid) {
      navigate("/signin");
    }
  }, []);

  const fetchData = async () => {
    const GITHUB_USER_API = "https://api.github.com/users/";
    try {
      const { data } = await axios.get(GITHUB_USER_API + userName);
      // console.log(data);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md="5">
          <InputGroup>
            <Form.Control
              placeholder="Please Enter the username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <Button
              variant="outline-primary"
              onClick={fetchData}
              id="basic-addon1"
            >
              Fetch User
            </Button>
          </InputGroup>

          {user ? <UserCard user={user} /> : null}
        </Col>

        <Col md="7" className="pb-5">
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
