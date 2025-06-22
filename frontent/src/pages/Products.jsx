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
     loader={<h4>Loading...</h4>}
     endMessage={
     <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
     </p>
  }

    >
    <div className='card1 flex flex-wrap'>
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