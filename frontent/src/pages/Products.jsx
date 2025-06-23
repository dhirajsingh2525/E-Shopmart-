import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const ProductTemplate = lazy(() => import('../components/ProductTemplate'));
import InfiniteScroll from "react-infinite-scroll-component";
import axios from '../api/config';
import { loadlazyProduct } from '../store/reducers/productSlice';


const Products = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.productReducer)
   const [hasMore, setHasMore] = useState(true)

   const fetchProductData = async () =>{
     try {
       const {data} = await axios.get(
           `/products?_limit=6&_start=${products.length}`
       )

       if(data.length == 0){
          setHasMore(false)
       }else{
         dispatch(loadlazyProduct(data))
       }
     } catch (error) {
       console.log(error)
     }
   }

   useEffect(() => {
     fetchProductData();
   }, [])
   
  
  
  return (
    <InfiniteScroll
     dataLength={products.length} 
     next={fetchProductData}
     hasMore={hasMore}
      loader={<p className="text-center py-4 text-gray-500">Loading more products...</p>}
  endMessage={
    <p className="text-center text-gray-500 mt-5">
      <b>Yay! You have seen it all</b>
    </p>

  }
    >
    <div className='card1 flex flex-wrap gap-5 mx-auto px-4 py-6 ml-7'>
        {products.map((product, i) => (
          <Suspense key={i} fallback={<h1>Loading...</h1>}>
            <ProductTemplate product={product}/>
          </Suspense>
  ))}
        
    </div>
    </InfiniteScroll>
  )
}

export default Products 