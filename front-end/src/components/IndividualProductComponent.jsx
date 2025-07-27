import coffeeImg from "../assets/coffeeBag.png"
import { useNavigate } from "react-router-dom"

function IndividualProductComponent({product}) {
  const navigate = useNavigate()

  const detailsPageRedirect = () => {
    navigate(`/products/${product.productName}`)
  }
  return (
    <>
    <div id='ind-product-container'>
      <img id='ind-product-img' src={coffeeImg}/>
      <div>
      <h3 id="ind-product-details">{product.productName}</h3>
      <div id='ind-product-flavors'>{product.flavors[0]} • {product.flavors[1]} • {product.flavors[2]}</div>
      </div>
      <div id='featured-button-container'>
        <button type='button' onClick={()=>alert('Added to cart1')}>Quick Add</button>
        <button type='button' onClick={detailsPageRedirect}>Details</button>
      </div>
      </div>
    </>
  )
  }


export default IndividualProductComponent