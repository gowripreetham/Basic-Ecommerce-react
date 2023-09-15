import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuth } from "../Contexts/AuthContext";

const User = () => {
  const { register } = useAuth();

  const [inputs, setInputs] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    setInputs({
      Email: "",
      Password: "",
    });
  };

  return (
    <div>
      <h1>Heyyy User</h1>

      <Card>
        <Card.Body>
          <h2>Please register Here</h2>
          <Form>
            <Form.Group>
              <Form.Label>Enter your Email : </Form.Label>
              <Form.Control
                name="Email"
                type="text"
                placeholder="Email"
                value={inputs.Email}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <br></br>

            <Form.Group>
              <Form.Label>Enter your Password : </Form.Label>
              <Form.Control
                name="Password"
                type="text"
                placeholder="Password"
                value={inputs.Password}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Form>

          <br></br>

          <Button type="submit" onClick={handleRegistration}>
            Register
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
