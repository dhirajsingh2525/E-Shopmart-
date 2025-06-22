import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Unauth from './Unauth';
import Setting from '../pages/users/Setting';
import Auth from './Auth';
import Createproduct from '../pages/products/Createproduct';
import DetailsProduct from '../pages/products/DetailsProduct';
import Carts from '../pages/users/Carts';
const Signup = lazy(() => import("../pages/users/Signup"))
const Signin = lazy(() => import("../pages/users/Signin"))
const About = lazy(() => import("../pages/About"))
const Products = lazy(() => import("../pages/Products"))
const PageNotFound = lazy(() => import("../pages/PageNotFound"))


const Mainroutes = () => { 
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/signup' element={
              <Unauth>
              <Signup />
               </Unauth>
          } />
            <Route path='/signin' element={
               <Unauth>
                <Signin />
               </Unauth>
          } />
           <Route path='/settings' element={
               <Auth>
              <Setting />
               </Auth>
          } />
             <Route path='/createproduct' element={
               <Auth>
              <Createproduct />
               </Auth>
          } />
           <Route
            path='/product-info/:id'
            element={
              <Auth>
                <DetailsProduct />
              </Auth>
            }
            />
             <Route 
            path='/carts'
            element={
              <Auth>
                <Carts />
              </Auth>
            }
            />
           
          <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}

export default Mainroutes 