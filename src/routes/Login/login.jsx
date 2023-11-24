import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/usuarios?email=' + email)
      .then((response) => response.json())
      .then((data) => processLogin(data))
  };

  function processLogin(users) {
    if(users.length === 0) {
      setErrorMessage("Usuario não encontrado")
      return;
    }

    const user = users[0];

    if(user.senha == password) {
      sessionStorage.setItem('name', user.nome);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('isLoggedIn', true)
      navigate("/home")
    } else {
      setErrorMessage("Senha invalida")
    }
  }

  return (
    <Container className='custom-container'>
      <Alert
        key='danger'
        variant='danger'
        hidden={errorMessage == ''}>
          {errorMessage}
      </Alert>
      <Form className='custom-form'>
        <Form.Group controlId="formBasicEmail" className="small-group">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="small-group">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} className="custom-button">
          Entrar
        </Button>
      </Form>
    </Container>
  )};

  export default Login;