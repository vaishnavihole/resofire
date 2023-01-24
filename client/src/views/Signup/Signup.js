import { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import ImgLock from './lock.png'
import ImgSignup from './signup-image.png'
import "./Signup.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function userSignup() {
    const response = await axios.post('/signup', {
      fullName: fullName,
      email: email,
      password: password
    })
    if (response.data.success === true) {
      swal({
        title: 'success!',
        text: "Signup successfully..🤗",
        icon: 'success'
      })
      window.location.href = "/login"
    }
    else {
      swal({
        title: 'error!',
        text: response.data.message,
        icon: 'error'
      })
    }

    console.log(response.data)

    setFullName("")
    setEmail("")
    setPassword("")
  }


  return (
    <div className="singup-main-container">
        <div>
          <img className='signup-image' src={ImgSignup} />
        </div>
        <div>
          <div className="signup-form-container">
            <img className='signup-form-header-image' src={ImgLock} />
            <form>
              <div>
                <input className='signup-form-input' type='text' placeholder='Enter FullName' value={fullName}
                  onChange={(e) => { setFullName(e.target.value) }} required />
              </div>

              <div>
                <input className='signup-form-input' type='email' placeholder='Enter Email' value={email}
                  onChange={(e) => { setEmail(e.target.value) }} required />
              </div>

              <div>
                <input className='signup-form-input' type='password' placeholder='Enter Password' value={password}
                  onChange={(e) => { setPassword(e.target.value) }} required />
              </div>

              <button className='signup-button'
                type="button" onClick={userSignup}>Signup</button>
            </form>
          </div>
        </div>
      </div>
   
  )
}

export default Signup;