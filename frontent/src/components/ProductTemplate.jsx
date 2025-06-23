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
                  <button className='rounded hover:bg-emerald-600 transition-all'>Add to cart 👉
                  </button>
                  <Link className='text-sm text-blue-600 hover:underline' to={`/product-info/${product.id}`}>
                    more info
                  </Link>
              </div>
              </div> 
//     <div 
//   key={product.id}
//   title={product.title}
//   className="w-[31%] bg-white shadow-md shadow-emerald-100 hover:shadow-lg transition-all duration-300 rounded-lg p-4 m-2 flex flex-col"
// >
//   <img
//     className="h-48 object-contain mb-3 mx-auto"
//     src={product.image}
//     alt="product-img"
//   />
//   <h2 className="text-lg font-bold text-gray-800 mb-1 truncate">{product.title}</h2>
//   <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//   <div className="flex justify-between items-center mt-3">
//     <p className="text-red-500 font-semibold text-lg">${product.price}</p>
//     <Link to={`/product-info/${product.id}`} className="text-sm text-blue-600 hover:underline">
//       More Info
//     </Link>
//   </div>
//   <button className="mt-3 w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition-all">
//     Add to Cart
//   </button>
// </div>

  )
}

export default ProductTemplate