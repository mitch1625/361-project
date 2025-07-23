import { useState } from "react"
import ButtonComponent from "../components/ButtonComponent"

function LoginPage() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")


 return (
  <>
   <form type='submit' onSubmit={(e) => console.log('Logging in')}>
     Email: 
     <input 
      type='text' 
      name='email'
      placeholder="Enter EmaiL Address"
      onChange={(e)=>setEmail(e.target.value)}></input>

     Password:
     <input type='password' 
     name='passwrod' 
     placeholder="Enter Password"

     onChange={(e) => setPassword(e.target.value)}
     ></input>
   </form>
   <button  type="button" onClick={()=>alert(`Logging in:\n Email: ${email}\n Password: ${password}`)}>test</button>
   Already have an account? Click here to sign in.
  </>
 )
} 


export default LoginPage 