import React from 'react'
import Product from './Product'
import './ProductList.css'
import { render } from 'react-dom';

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
  let LaptopFeature =["16GB RAM", "1TB SSD", "4K Display", "Intel Core i9"]; // passing the object to the props

  // let WatchFeature = ["Heart Rate Monitor", "Sleep Tracker", "Waterproof", "Bluetooth"];

// rendering the array listing it in the items 
  // let WatchFeature =[ <li>Heart Rate Monitor</li>,<li>Sleep Tracker</li>, <li>Waterproof</li>, <li>Bluetooth</li>]; 
  // alternative for rendering the array using the map();
        let WatchFeature = ["Heart Rate Monitor", "Sleep Tracker", "Waterproof", "Bluetooth"];
        let watchlist = WatchFeature.map((feature) => {
          return <li>{feature}</li>;
        });
  return (
    <div className='product-list'>
  <Product title={"Redmi Note-12"} price={30000}
    imgUrl="https://static-01.daraz.pk/p/a8261ad7669e4c2fe21db03de3e66088.jpg"
    feature={Phonefeatures}/>
    
  <Product title="HP Spectre x360" price={150000} 
   imgUrl="https://starcity.pk/wp-content/uploads/2023/05/HP-Spectre-x360-Convertible-13-AC0xx-4.jpg"
   feature={LaptopFeature}/>
   

  <Product  title={"Smart Watch-i Series"} price={4550}
    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygBL_dNjqtBnCSEtlDjnQHfVWUzUe37VlKg&s" 
    feature={WatchFeature}/>
    

     <Product  title={"Smart Watch-i Series"} price={2000}
     imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygBL_dNjqtBnCSEtlDjnQHfVWUzUe37VlKg&s" 
     feature={watchlist}/>
     </div>
  )
}

export default ProductList;