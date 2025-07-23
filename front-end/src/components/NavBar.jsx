import { Link } from "react-router-dom"

function NavBar() {
 return (
  <>
  <div className="flex flex-row justify-between">
    Coffee Shop
    <nav className="flex justify-evenly w-1/2">
     <Link to='/'>Home</Link>
     <Link to='/all-products'>Shop</Link>
     <Link to='/login'>Account</Link>
     <Link to='/cart'>Cart</Link>
    </nav>
  </div>
  </>
 )
}


export default NavBar