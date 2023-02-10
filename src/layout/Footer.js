import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container
      fluid
      className="text-center bg-secondary fixed-bottom
                    text-white text-uppercase p-2"
    >
      github user statistics App by <b> Dhananjay </b>
    </Container>
  );
};

export default Footer;
