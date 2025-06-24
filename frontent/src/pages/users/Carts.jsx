import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncupdateuser } from '../../store/actions/userActions'




const Carts = () => {
    const {user} = useSelector((state) => state.userReducer)
    const {products} = useSelector((state) => state.productReducer)
    const dispatch = useDispatch();
    // console.log(user);

    const addcartHandler = (index) =>{
        const copyuser = {...user, cart:[...user.cart]}
        
          copyuser.cart[index] = {
               ...copyuser.cart[index],
               quantity: copyuser.cart[index].quantity + 1
        }
       dispatch(asyncupdateuser(copyuser.id, copyuser))   
    }

    const subtractHandler = (index) => {
      const copyuser = {...user, cart:[...user.cart]}
    
      if(copyuser.cart[index].quantity >1){
         copyuser.cart[index] = {
               ...copyuser.cart[index],
               quantity: copyuser.cart[index].quantity - 1
        }
      }else{
        copyuser.cart.splice(index, 1)
      }
         dispatch(asyncupdateuser(copyuser.id, copyuser))   
    }
    const removecart = (index) =>{
      const copyusers = {...user, cart:[...user.cart]}
       copyusers.cart.splice(index, 1)
       dispatch(asyncupdateuser(copyusers.id, copyusers))
    }


  const cartlist = user?.cart?.map((cart, i) => {
  if (!cart.product) return null; 

  return (
    <div key={i}    className="addcart flex items-center justify-between gap-4 mb-5 shadow-md shadow-emerald-500 p-4 rounded-lg ">
      <img src={cart.product.image}    className="addcart-img w-24 h-24 object-contain rounded-md" alt="" />
      <h1 className='addcart-title'>{cart.product.title}</h1>
      <div className='flex gap-2'>
        <button
         onClick={() =>addcartHandler(i)} 
        className="addcart-btn w-20 h-10 bg-zinc-700 text-white rounded"
        >+</button>
        <span 
        className="addcart-btn w-20 h-10 pt-2 border border-gray-300 rounded text-center"
        >{cart.quantity}</span>
        <button
         onClick={() => subtractHandler(i)} 
        className="addcart-btn w-20 h-10 bg-zinc-700 text-white rounded"
         >-</button>
      </div>

      <h3 onClick={() =>removecart(i)}  className="text-red-500 text-2xl hover:text-red-700">
        <i className="ri-close-line"></i>
        </h3>
    </div>
  );
})
  return (
    <div className='px-6 py-6'>{user.cart.length>0 ? cartlist : "no cart added"}</div>
  )
}

export default Carts 