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
    <div key={i} className='flex justify-between items-center mb-5 shadow-emerald-500 shadow-md rounded p-5'>
      <img src={cart.product.image} className='w-[10vmax] h-[10vmax]' alt="" />
      <h1>{cart.product.title}</h1>
      <div className='flex gap-2'>
        <button onClick={() =>addcartHandler(i)} className='px-4 py-2 bg-black text-white'>+</button>
        <span className='px-4 py-2 border'>{cart.quantity}</span>
        <button onClick={() => subtractHandler(i)} className='px-4 py-2 bg-black text-white'>-</button>
      </div>
      <h3 onClick={() =>removecart(i)} className="cursor-pointer text-red-500 text-2xl">
        <i className="ri-close-line"></i>
        </h3>
    </div>
  );
})
  return (
    <div>{cartlist}</div>
  )
}

export default Carts 