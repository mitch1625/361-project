import { useState } from "react"
import { Link } from "react-router-dom"

function RegistrationPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 return (
  <>
   <div id='registration-page'>
      <div className="login-register-container">
        <div className="login-register-header">Register Account</div>
        <div className="login-register-subtext">Enter information to create an account</div>
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
        name='password' 
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}>
          
        </input>
      </div> 
    </form>
    <button id="login-register-button" type="button" onClick={()=>alert(`Registering in:\n Email: ${email}\n Password: ${password}`)}>Register</button>
    <div className="login-register-redirect-text">
      Already have an account? Click <Link to='/login'>here to login.</Link>
    </div>
    </div>
  </>
 )
}


export default RegistrationPage