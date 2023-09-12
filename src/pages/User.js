import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const User = () => {
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

  //   const [usersData, setusersData] = useState([]);

  const handleRegistration = async (e) => {
    e.preventDefault();

    // const userData = {
    //   Email: inputs.Email,
    //   Password: inputs.Password,
    // };
    // setusersData([...usersData, userData]);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        app.auth(),
        inputs.Email,
        inputs.Password
      );
      // User registered successfully
      const user = userCredential.user;
      console.log("User registered:", user);
      // You can redirect the user to their profile page or another route here
    } catch (error) {
      console.error("Error registering user:", error.message);
      // Handle registration error (e.g., display an error message)
    }

    setInputs({
      Email: "",
      Password: "",
    });
  };

  return (
    <div>
      <h1>Heyyy User</h1>
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
    </div>
  );
};

export default User;
