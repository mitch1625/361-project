import IndividualProductComponent from "../components/IndividualProductComponent"
import ProductDetailsComponent from "../components/ProductDetailsComponent"
import coffeeImg from "../assets/coffeeBag.png"
import { useState } from "react"


function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)

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
            <h3 id="ind-product-details">Product Name</h3>
            <div id='ind-product-flavors'>Flavor1 • Flavor2 • Flavor3</div>
            </div>
            </div>
    </div>
    <div id='product-details-text'>
      <p>
      Smooth. Sweet. Effortless. Vanilla Drift is our signature cold brew, slow-steeped for 18 
      hours and infused with natural vanilla for a subtly sweet finish. 
      Made with 100% Arabica beans and a hint of oat milk, it 
      delivers a velvety-smooth flavor that’s both refreshing and comforting — perfect for mornings, afternoons, or anytime you need a gentle kick.
      Whether you're sipping it over ice or straight from the bottle, 
      Vanilla Drift is your go-to for an easy, flavorful escape.
      </p>
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