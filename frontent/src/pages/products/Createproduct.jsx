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
    <div className='createp w-full px-6 py-6'>
         <form onSubmit={handleSubmit(submiteHandler)} className='createf p-5 w-full flex flex-col'>
           <input
          {...register("image")}
           type="url"
           placeholder='image'
           className='create-p-input w-1/2 text-2xl outline-none border-b p-2 mb-5'
           />
          <input
          {...register("title")}
           type="text"
           placeholder='title'
           className='create-p-input w-1/2 text-2xl outline-none border-b p-2 mb-5'
           />
          <input
          {...register("price")}
           type="text"
           placeholder='0.00'
           className='create-p-input w-1/2 text-2xl outline-none border-b p-2 mb-5'
           />
              <input 
           {...register("category")}
           type="text"
           placeholder='category'
            className='create-p-input w-1/2 text-2xl outline-none border-b p-2 mb-5'
            />
            <textarea {...register("description")} 
              type="text"
              placeholder='enter description here...'
              className="create-p-input w-1/2 text-3xl border-b outline-0 p-2 mb-5"
            ></textarea>
            <button className='create-p-btn w-1/2 text-white text-3xl px-5 py-3 rounded bg-red-500'>create product</button>
            </form>
    </div>
  )
}

export default Createproduct 