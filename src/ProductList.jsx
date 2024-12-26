import React from 'react'
import Product from './Product'
import './ProductList.css'

const ProductList = () => {
  return (
    <div className='product-list'>
    <Product />
    <Product />
    <Product />
    </div>
  )
}

export default ProductList