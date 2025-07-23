import IndividualProductComponent from "./IndividualProductComponent"


function FeaturedProductsComponent () {
 return (
  <>
   <h2>Discover Our Best-Selling Coffees</h2>
   <div id='featured-product-container'>
    <IndividualProductComponent/>
    <IndividualProductComponent/>
    <IndividualProductComponent/>
   </div>
  </>
 )
}



export default FeaturedProductsComponent