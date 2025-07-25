import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import AllProductsPage from "./pages/AllProductsPage"
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegistrationPage/>}></Route>
          <Route path='/all-products' element={<AllProductsPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/details' element={<ProductDetailPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
