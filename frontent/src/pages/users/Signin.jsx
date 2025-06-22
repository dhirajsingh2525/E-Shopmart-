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
    <div>
      <form onSubmit={handleSubmit(submiteHandler)} className='p-5 w-full'>
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
            <button className='text-white text-3xl px-5 py-3 rounded bg-red-500'>signin user</button>
            <p>
              Don't have an account? {' '} 
              <Link to="/signup" className="text-blue-400"
              >signup</Link>
            </p>
      </form>
    </div>
  )
}

export default Signin 