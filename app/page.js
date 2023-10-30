'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

// Create styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Form = styled.form`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-image: url('right.jpg');
  background-size: cover;
  background-position: center;
`;

// Create the Login component
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleLogin}>
          <h2>Login</h2>
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
          <Button type="submit">Login</Button>
        </Form>
        <ImageContainer />
      </Content>
    </Container>
  );
}

export default Login;
