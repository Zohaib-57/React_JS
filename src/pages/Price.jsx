import React from 'react'

const Price = ({oldPrice ,newPrice}) => {
    let styles ={
        textDecorationLine:"line-through"
    }
    let divStyles = {
        display:"inline-block",
    }
  return (
    <div styles={divStyles}>
        <p style={styles}>Old Price: {oldPrice}</p>
        <p>New Price: {newPrice}</p>

    </div>
  )
}

export default Price