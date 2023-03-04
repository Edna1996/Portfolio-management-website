import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 2px #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0077cc;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add authentication logic here
    if (username === "admin" && password === "password") {
      // redirect to dashboard or home page
      console.log("Logged in successfully");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>{error}</Error>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
