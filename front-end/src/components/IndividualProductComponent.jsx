import coffeeImg from "../assets/coffeeBag.png"
import ButtonComonent from "./ButtonComponent"
function IndividualProductComponent() {
 
 return (
  <>
   <div id='ind-product-container'>
    <img id='ind-product-img' src={coffeeImg}/>
    <div>

    <h3 id="ind-product-details">Product Name</h3>
    <div>Flavor1 * Flavor2 * Flavor3</div>
    </div>
    <div id='featured-button-container'>
     <ButtonComonent
     label={'Quick Add'}
     type={'button'}
     />
     <ButtonComonent
     label={'Details'}
     type={'button'}/>
    </div>
    </div>
  </>
 )
}


export default IndividualProductComponent