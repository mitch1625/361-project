import coffeeImg from "../assets/coffeeBag.png"
import ButtonComonent from "./ButtonComponent"
function IndividualProductComponent() {

 return (
  <>
   <div id='ind-product-container'>
    <img id='ind-product-img' src={coffeeImg}/>
    <div>
    <h3 id="ind-product-details">Product Name</h3>
    <div id='ind-product-flavors'>Flavor1 • Flavor2 • Flavor3</div>
    </div>
    <div id='featured-button-container'>
      <button type='button' onClick={()=>console.log('adw')}>Quick Add</button>
      <button type='button'>Details</button>
    </div>
    </div>
  </>
 )
}


export default IndividualProductComponent