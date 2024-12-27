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
  let styles = {backgroundColor: 'red'}; // Dynamic Styling
  let isDsicount =price > 30000 ? "5% Discount" : "No Discount"; // Conditional Rendering using the ternary operator
    return (
      <div className='product'>
          <h3>{title}</h3>
          <h5>{price}</h5> {/* Working with props*/}
          <img src={imgUrl} alt={title} width={180} height={220}/>
          <p>{feature}</p>
          <p style={styles}>{isDsicount}</p> 
          {/* {price > 30000 ?<p>Discount 5%</p> : null}     another way of renderring the conditionals    */}
          {/* {price > 30000 && <p>Discount 5%</p>} another way of renderring the conditionals  using the logical conditions */}
      </div>
        );
  }


  // THIS IS CONSITIONAL RENDERING USING THE IF-ESLE STATMENT WHICH PROVIDE THE REPEATITION OF THE CODE

  // if(price>30000){
  //   return (
  //     <div className='product'>
  //         <h3>{title}</h3>
  //         <h5>{price}</h5> {/* Working with props*/}
  //         <img src={imgUrl} alt={title} width={180} height={220}/>
  //         <p>{feature}</p>
  //         <p>Discount of 5%</p>         
  //     </div>
  //       );
  // } else{
  //   return (
  //   <div className='product'>
  //   <h3>{title}</h3>
  //   <h5>{price}</h5> {/* Working with props*/}
  //   <img src={imgUrl} alt={title} width={180} height={180}/>
  //   <p>{feature}</p>
  //   </div>
  //   );
  // }
export default Product;