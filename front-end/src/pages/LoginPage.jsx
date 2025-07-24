import { useState } from "react"
import ButtonComponent from "../components/ButtonComponent"

function LoginPage() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")


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
    <button id="login-button" type="button" onClick={()=>alert(`Logging in:\n Email: ${email}\n Password: ${password}`)}>Login</button>
    <div className="login-register-redirect-text">
      Already have an account? Click here to sign in.
    </div>
    </div>
  </>
 )
} 
 

export default LoginPage 