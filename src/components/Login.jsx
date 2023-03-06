import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  function login(e){
    e.preventDefault()
    const user_info = { email, password };
    fetch("http://localhost:9292/login",{
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(user_info)
    })
    .then(response => response.json())
    .then(data => {
      setUser(data)
      localStorage.setItem('user_id', `${data.id}`)
      navigate('/')
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
      <h1 style={{ marginBottom: '20px' }}>Login</h1>
      <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="email" placeholder='Enter your email here....' name='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'white' }} />
        <input type="password" placeholder='Enter your password...' name='password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'white' }} />
        <button type="submit" style={{ padding: '10px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  )
}

export default Login
