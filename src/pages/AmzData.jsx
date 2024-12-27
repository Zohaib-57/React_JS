import React from "react";
import Price from "./Price";

const AmzData = ({title, idx ,img}) => {
    let oldPrices =["12,455","3,4550","12,900","3,500"]
    let newPrices =["12,000","3000","13,680","2000"]
    let description=["Durable","Free","Reliable","Easy to use"]
  
    return (
      <div className='product'>
          <h4>{title}</h4>
          <img src={img} alt={title} style={{ width: '180px', height: '180px', objectFit: 'cover' }}/>
          <p>{description[idx]}</p>
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
      </div>
    )
  }
  export default AmzData;