import { useState } from "react"
import ButtonComponent from "../components/ButtonComponent"
import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"
function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

 return (
  <>
    <div id='login-page'>
      <div className="login-register-container">
        <div className="login-register-header">My Account</div>
        <div className="login-register-subtext">Login below to access your account</div>
      </div>
    <form type='submit' onSubmit={() => console.log('Logging in')}>
      <div className="form-labels">
        EMAIL ADDRESS
        <input 
          type='text' 
          name='email'
          placeholder="Enter Email Address"
          onChange={(e)=>setEmail(e.target.value)}>
          </input>
      </div> 
      <div className="form-labels">
        PASSWORD
        <input type='password' 
        name='passwrod' 
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}>
          
        </input>
      </div> 
    </form>
    <button id="login-register-button" type="button" onClick={()=>{alert(`Logging in:\n Email: ${email}\n Password: ${password}`), navigate('/')}}>Login</button>
    <div className="login-register-redirect-text">
      Don't have an account? Click <Link to='/register'>here to register.</Link>
    </div>
    </div>
  </>
 )
} 
 

export default LoginPage 