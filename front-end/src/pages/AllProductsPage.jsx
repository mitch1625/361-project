import IndividualProductComponent from "../components/IndividualProductComponent"
import SortByComponent from "../components/SortByComponent"
import { useState } from "react"
import { allProducts } from "../productData"

function AllProductsPage() {
  const [sortGroup, setSortGroup] = useState("AlphaA-Z")

  function handleSort(event) {
    setSortGroup(event.target.value)
  }

const sortedProducts = [...allProducts].sort((a, b) => {
  switch (sortGroup) {
    case "AlphaA-Z":
      return a.productName.localeCompare(b.productName)
    case "AlphaZ-A":
      return b.productName.localeCompare(a.productName)
    case "PriceL-H":
      return a.price - b.price
    case "PriceH-L":
      return b.price - a.price
    default:
      return 0
  }
})
 return (
  <>
    <div id='all-products-text-container'>
      <div id='all-products-header'>All Single Origin Coffee</div>
      <div id='all-products-desc'>Our single origin coffee is a celebration of coffee’s true essence, offering a rich and distinct taste experience that highlights the unique flavors of beans sourced from a single region. Unlike blends, each cup delivers the pure character and signature profile of its origin—whether it's the fruity brightness of Ethiopia, the chocolatey smoothness of Guatemala, or the earthy depth of Sumatra. Perfect for the discerning coffee drinker, our selection of single origin coffees showcases the best beans from around the world, ethically sourced from sustainable farms. Each batch is roasted to highlight its natural flavors, delivering an authentic and unforgettable coffee experience in every sip.</div>
    </div>
    <SortByComponent handleSort={handleSort}/>
    <div id='all-product-container'>
      {sortedProducts.map((product, index) => (
        <IndividualProductComponent 
          product={product}
          key={index}
        />
      ))}
    </div>
  </>
 )
}


export default AllProductsPage