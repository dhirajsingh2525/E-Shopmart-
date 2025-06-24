import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncsigninuser } from '../../store/actions/userActions'

const Signin = () => {
    const dispatch = useDispatch();
 const {register, handleSubmit } = useForm()

 const submiteHandler = (user) =>{
    
    dispatch(asyncsigninuser(user));
 }
  return (
    <div className='signin w-full flex items-center justify-center mx-auto'>
      <form onSubmit={handleSubmit(submiteHandler)} className='signin-f w-1/2 p-5'>
          <input
          {...register("email")}
           type="email"
           placeholder='enter email'
           className='signin-f-input w-full text-2xl outline-none border-b p-2 mb-5'
           />
           <input 
           {...register("password")}
           type="password"
           placeholder='******'
            className='signin-f-input w-full text-2xl outline-none border-b p-2 mb-5'
            />
            <button className='signin-f-btn text-white text-3xl px-5 py-3 rounded bg-blue-500'>signin user</button>
            <p>
              Don't have an account? {' '} 
              <Link to="/signup" className="text-emerald-900"
              >signup</Link>
            </p>
      </form>
    </div>
  )
}

export default Signin 