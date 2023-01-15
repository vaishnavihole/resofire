import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import './Login.css'

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
                icon: "success"
            })
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
        <div>
            <div className='login-container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div>

                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='form-container'>
                            <form>
                                <div>
                                    <input className='login-form-input' type='email' placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                </div>

                                <div>
                                    <input className='login-form-input' type='password' placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                                </div>

                                <button className='login-button'
                                    type="button" onClick={userLogin}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
