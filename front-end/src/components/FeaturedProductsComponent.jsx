import IndividualProductComponent from "./IndividualProductComponent"


function FeaturedProductsComponent () {
 return (
  <>
   <div>Discover Our Best-Selling Coffees</div>
   <div id='featured-product-container'>
    <IndividualProductComponent/>
    <IndividualProductComponent/>
    <IndividualProductComponent/>
   </div>
  </>
 )
}



export default FeaturedProductsComponent