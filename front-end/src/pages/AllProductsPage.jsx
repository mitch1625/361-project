import IndividualProductComponent from "../components/IndividualProductComponent"
import { useState } from "react"

function AllProductsPage() {

 return (
  <>
    <div id='filter-bar'>
      <button onClick={handleOpen}>Dropdown</button>
      {open ?         
        <ul className="menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>: null}

    </div>
    <div id='all-product-container'>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
      <IndividualProductComponent/>
    </div>
  </>
 )
}


export default AllProductsPage