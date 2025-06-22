import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncdeleteproduct, asyncupdateproduct } from '../../store/actions/productActions'
import { asyncupdateuser } from '../../store/actions/userActions'
import { toast } from 'react-toastify'

const DetailsProduct = () => {
    const {id} = useParams()
    const {products} = useSelector((state) => state.productReducer)
    const {user} = useSelector((state) => state.userReducer)
    const product = products?.find((p) => p.id == id)
    

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({
        defaultValues:{
            title: product?.title,
            image: product?.image,
            description: product?.description,
            category: product?.category,
            price: product?.price
        }
    })
    
    const AddToCartHandler = () =>{
       const copyusers = {...user, cart:[...user.cart]}
       console.log(copyusers)

       const index = copyusers?.cart?.findIndex((x) => x?.product?.id == id)
       console.log(index);
       if(index == -1){
         copyusers.cart.push({product, quantity: 1})
       }else{
          copyusers.cart[index] = {
            product,
            quantity: copyusers.cart[index].quantity + 1 
          }
       }
       dispatch(asyncupdateuser(copyusers.id, copyusers))
       toast.success("Add successfully")
    }

    const submitHandler = (updateproduct) =>{
       dispatch(asyncupdateproduct(product.id, updateproduct)) 
       navigate('/')
    }
    const deleteHandler = () =>{
        dispatch(asyncdeleteproduct(id))
        navigate("/")
    }


  return product ? (
    <div className='card-details w-full'>
        <div className='card-show w-full flex justify-between'>
              <img 
              className='card-show-img block max-auto h-[30vmax]'
              src={product?.image}
               alt="" />
              <div className='flex flex-col gap-8'>
                 <h1 className='card-details-text text-2xl mt-3'>{product?.title}</h1>
               <p className='w-90'>{product?.description}</p>
               <h2 className='text-red-400 mt-3 text-5xl'>${product?.price}</h2>
               <button onClick={AddToCartHandler}
               className='px-4 py-3 rounded bg-yellow-400 mt-5'>Add to cart</button>
              </div>
        </div>
        <hr className='my-10' />
       {user?.isAdmin &&  <form onSubmit={handleSubmit(submitHandler)} className='update-form p-5 w-full'>
            <h1 className='text-blue-400 text-5xl mb-5'>update product details</h1>
            <input 
            {...register("image")}
            type="url"
            placeholder='product iamge'
            className='update-form1 w-full text-3xl outline-0 border-b mt-5 p-2'
             />
             <input 
             {...register("title")}
             type="text"
             placeholder='product title'
             className='update-form1 w-full text-3xl outline-0 border-b mt-5 p-2'
              />
              <input 
              {...register("price")}
              type="text"
              placeholder='0.00'
               className='update-form1 w-full text-3xl outline-0 border-b mt-5 p-2'
               />
                 <input 
              {...register("category")}
              type="text"
              placeholder='product category'
               className='update-form1 w-full text-3xl outline-0 border-b mt-5 p-2'
               />
               <textarea 
               {...register("description")}
               type="text"
               placeholder='enter description here...'
               className='update-form1 w-full text-3xl outline-0 border-b mt-5 p-2'
               ></textarea>
               <button type='submit' className='update-form1 mr-5 px-5 py-3 rounded text-3xl bg-red-400 text-white'>update product</button>
               <button onClick={deleteHandler} type='button' className='update-form1 px-5 py-3 rounded text-3xl bg-red-400 text-white'>delete handler</button>
        </form>
}
    </div>
  )  : (
    "loading..."
  )
}

export default DetailsProduct 
