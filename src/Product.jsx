import React from 'react'
import './Product.css'

// const Product = () => {
//   return (
//     <div className='product'>
//         <h3>Product Title</h3>
//         <h5>Product Discription</h5>
//     </div>
//   )
// }
const Product = ({ title, price, imgUrl ,feature}) => {
  return (
      <div className='product'>
          <h3>{title}</h3>
          <h5>{price}</h5> {/* Working with props*/}
    <img src={imgUrl} alt={title} width={180} height={180}/>
    <p>{feature}</p>
      </div>
  );
};

export default Product;