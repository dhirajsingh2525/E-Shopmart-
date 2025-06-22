import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../../store/actions/productActions';

const Createproduct = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submiteHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateproduct(product))
        navigate('/');
    }
  return (
    <div>
         <form onSubmit={handleSubmit(submiteHandler)} className='p-5 w-full'>
           <input
          {...register("image")}
           type="url"
           placeholder='image'
           className='w-full text-2xl outline-none border-b p-2 mb-5'
           />
          <input
          {...register("title")}
           type="text"
           placeholder='title'
           className='w-full text-2xl outline-none border-b p-2 mb-5'
           />
          <input
          {...register("price")}
           type="text"
           placeholder='0.00'
           className='w-full text-2xl outline-none border-b p-2 mb-5'
           />
              <input 
           {...register("category")}
           type="text"
           placeholder='category'
            className='w-full text-2xl outline-none border-b p-2 mb-5'
            />
            <textarea {...register("description")} 
              type="text"
              placeholder='enter description here...'
              className="w-full text-3xl border-b outline-0 p-2 mb-5"
            ></textarea>
            <button className='text-white text-3xl px-5 py-3 rounded bg-red-500'>create product</button>
            </form>
    </div>
  )
}

export default Createproduct 