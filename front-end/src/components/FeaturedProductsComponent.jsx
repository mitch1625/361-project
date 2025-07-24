import IndividualProductComponent from "./IndividualProductComponent"


function FeaturedProductsComponent () {
 return (
  <>
   <div id='featured-items-header'>Discover Our Best-Selling Coffees</div>
   <div id='featured-product-container'>
    <IndividualProductComponent/>
    <IndividualProductComponent/>
    <IndividualProductComponent/>
   </div>
  </>
 )
}



export default FeaturedProductsComponent