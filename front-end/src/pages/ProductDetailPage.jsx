import IndividualProductComponent from "../components/IndividualProductComponent"
// import ProductDetailsComponent from "../components/ProductDetailsComponent"
import coffeeImg from "../assets/coffeeBag.png"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { allProducts } from "../productData"

function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const {productName} = useParams()
  
  const product = allProducts.find(p => p.productName === productName)

  const decreaseQuantity = () => {
    if (quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    alert(`Adding to ${quantity} products to cart`)
  }

 return ( 
  <>
  <div id="product-details-container">
    <div id="product-details-product">
          <div id='ind-product-container'>
            <img id='ind-product-img' src={coffeeImg}/>
            <div>
            <h3 id="ind-product-details">{product.productName}</h3>
            <div id='ind-product-flavors'>{product.flavors[0]} • {product.flavors[1]} • {product.flavors[2]}</div>
            </div>
            </div>
    </div>
    <div id='product-details-text'>
      <p>{product.description}</p>
      <div id='product-details-size-price'>
        Size: 12 oz bottle<br/>
        Price: $4.99
      </div>
    </div>
    <div id='product-details-button-container'>
      <div id='increase-decrease-quant'>
        <button onClick={() => decreaseQuantity()}>-</button>
        <input id='quantity-input' type='number' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}></input>
        <button onClick={() => increaseQuantity()}>+</button>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
    <div>
    </div>
  </div>
  </>
 )
}

export default ProductDetailPage