import React from 'react';
import useAuth from '../auth/useAuth'

export default function LoginPage() {

  const userCredentials = {};

  const { login } = useAuth();

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredentials)}>Iniciar Sesion</button>
    </div>
  )
}
