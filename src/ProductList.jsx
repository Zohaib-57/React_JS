import React from 'react'
import Product from './Product'
import './ProductList.css'

// const ProductList = () => {
//   return (
//     <div className='product-list'>
//     <Product />
//     <Product />
//     <Product />
//     </div>
//   )
// }
const ProductList = () => {
  let Phonefeatures = ["4GB RAM", "64GB Storage", "48MP Camera", "5000mAh Battery"];  // Passing the array to the  props
  let LaptopFeature ={ a:"16GB RAM", b:"1TB SSD", c:"4K Display", d:"Intel Core i9"}; // passing the object to the props
  let WatchFeature = ["Heart Rate Monitor", "Sleep Tracker", "Waterproof", "Bluetooth"];
  return (
    <div className='product-list'>
  <Product title={"Redmi Note-12"} price={"Rs 30000/-"}
    imgUrl="https://static-01.daraz.pk/p/a8261ad7669e4c2fe21db03de3e66088.jpg"
    feature={Phonefeatures}/>
    
  <Product title="HP Spectre x360" price="Rs 326000/-" 
   imgUrl="https://starcity.pk/wp-content/uploads/2023/05/HP-Spectre-x360-Convertible-13-AC0xx-4.jpg"
   feature={LaptopFeature}/>
   

  <Product title={"Smart Watch-i Series"} price={"Rs 4500/-"}
    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygBL_dNjqtBnCSEtlDjnQHfVWUzUe37VlKg&s" 
    feature={WatchFeature}/>
    </div>
  )
}

export default ProductList;