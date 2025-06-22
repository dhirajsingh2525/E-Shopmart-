import axios from "../../api/config";
import { loadproducts } from "../reducers/productSlice";



export const asyncloadproducts = () => async(dispatch, getState) =>{
   try {
      const {data} = await axios.get("/products")
       localStorage.setItem('products', JSON.stringify(data))
    dispatch(loadproducts(data))
   } catch (error) {
     console.log(error)
   }
}

export const asynccreateproduct = (product) => async(dispatch, getState) =>{
    try {
         await axios.post('/products', product)
         dispatch(asyncloadproducts())
         console.log("products created !")
    } catch (error) {
        console.log(error)
    }
}
export const asyncupdateproduct = (id, product) => async(dispatch, getState) =>{
     try {
        await axios.patch(`/products/${id}`, product)
        dispatch(asyncloadproducts())
        console.log('product updated !')
     } catch (error) {
        console.log(error)
     }
}
export const asyncdeleteproduct = (id) => async(dispatch, getState) =>{
   try {
      await axios.delete(`/products/${id}`)
     dispatch(asyncloadproducts())
   } catch (error) {
     console.log(error)
   }
}
