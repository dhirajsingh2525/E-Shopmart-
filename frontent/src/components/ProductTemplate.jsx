import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductTemplate = ({product}) => {

 
  return (
     <div 
            title={product.title}
            key={product.id}
            className='card w-[31%] shadow-emerald-500 shadow-md  p-1 rounded mr-3 mb-3'>
              <img className='card-img h-[30vh] mx-auto block' src={product.image} alt="" />
              <h1 className='card-title mt-3 text-2xl'>{product.title.slice(0,15)}...</h1>
              <p className='text-red-300'>${product.price}</p>
              <p>{product.description.slice(0, 80)}...</p>
              <div className='mt-2 p-2 w-full flex justify-between items-center'>
                  <button>Add to cart</button>
                  <Link to={`/product-info/${product.id}`}>
                    more info
                  </Link>
              </div>
              </div> 
  )
}

export default ProductTemplate