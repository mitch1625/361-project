import IndividualProductComponent from "./IndividualProductComponent"
import { featuredProducts } from "../productData"

function FeaturedProductsComponent () {
 return (
  <>
   <div id='featured-items-header'>Discover Our Best-Selling Coffees</div>
   <div id='featured-product-container'>
    {featuredProducts.map((product,index) => (
      <IndividualProductComponent
        key={index}
        product={product}
        />
    ))}
   </div>
  </>
 )
}



export default FeaturedProductsComponent