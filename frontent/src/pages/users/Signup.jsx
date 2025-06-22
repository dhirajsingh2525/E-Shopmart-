import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux";
import { asyncsignupuser } from '../../store/actions/userActions';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()

     const submiteHandler = (user) =>{
        user.id = nanoid()
        user.isAdmin = false
        user.cart = []
      dispatch(asyncsignupuser(user))
      navigate('/signin')
 }
  return (
    <div>
         <form onSubmit={handleSubmit(submiteHandler)} className='p-5 w-full'>
              <input
          {...register("username")}
           type="text"
           placeholder='enter name here'
           className='w-full text-2xl outline-none border-b p-2 mb-5'
           />
          <input
          {...register("email")}
           type="email"
           placeholder='enter email'
           className='w-full text-2xl outline-none border-b p-2 mb-5'
           />
           <input 
           {...register("password")}
           type="password"
           placeholder='******'
            className='w-full text-2xl outline-none border-b p-2 mb-5'
            />
            <button className='text-white text-3xl px-5 py-3 rounded bg-red-500'>signup user</button>
            <p>
              Already have an account? {' '} 
              <Link to="/signin" className="text-blue-400"
              >signin</Link>
            </p>
      </form>
    </div>
  )
}

export default Signup 