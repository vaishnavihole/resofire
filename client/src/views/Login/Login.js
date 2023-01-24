import React, { useState, useEffect } from 'react'
import './Login.css'
import swal from 'sweetalert'
import IMGlock from './lock.png'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'



function Login() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  async function userLogin() {
    const response = await axios.post('/login', {
      password: password,
      email: email,
    })

    if (response.data.success === true) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      swal({
        title: 'success!',
        text: "Login Successfully...🤗",
        icon: 'success'
      })
      window.location.href = "/dashboard"
    }
    else {
      swal({
        title: 'error!',
        text: response.data.message,
        icon: 'error'
      })
    }

    console.log(response.data)

    setPassword("")
    setEmail("")

  }
  return (

    <div className='login-main-container'>
      <Navbar />

      <div className='login-card-container'>
        <h2 className='login-heading'>Login</h2>
        <img className='login-img' src={IMGlock} />

        <form>
          <div>
            <input className='login-form-input' type='email' placeholder='Enter Email' value={email}
              onChange={(e) => { setEmail(e.target.value) }} required />
          </div>

          <div>
            <input className='login-form-input' type='password' placeholder='Enter Password' value={password}
              onChange={(e) => { setPassword(e.target.value) }} required />
          </div>

          <button className='login-button'
            type="button" onClick={userLogin}>Login</button>

        </form>

      </div>

    </div>

  )
}

export default Login