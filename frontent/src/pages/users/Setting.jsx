import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userActions';
import { toast } from 'react-toastify';

const Setting = () => {
    const {user} = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm(
       {
        defaultValues:{
            username: user?.username,
            email: user?.email,
            password: user?.password,
        }
       }
    )

    const updateHandler = (updateduser) =>{
      dispatch(asyncupdateuser(user.id, updateduser))
      toast.success("updated successfully")
    }

    const deleteHandler = () =>{ 
        dispatch(asyncdeleteuser(user.id))
    }

    const logoutHandler = () =>{
        dispatch(asynclogoutuser(user.id))
    }
  return (
   <div className="flex justify-center items-center px-4 py-6">
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="w-full max-w-lg bg-white shadow-lg shadow-blue-600 rounded-xl p-8 flex flex-col items-center gap-2"
      >
        {/* Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="User Profile"
          className="w-12 h-12 rounded-full shadow-md"
        />

        <h2 className="text-xl font-semibold text-gray-700">Account Settings</h2>

        {/* Inputs */}
        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="w-full border-b border-gray-300 text-xl px-2 py-2 outline-none focus:border-blue-500 transition-all"
        />
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 text-xl px-2 py-2 outline-none focus:border-blue-500 transition-all"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full border-b border-gray-300 text-xl px-2 py-2 outline-none focus:border-blue-500 transition-all"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white text-md py-1 rounded hover:bg-blue-600 transition-all"
        >
          Update Profile
        </button>

        <button
          onClick={logoutHandler}
          type="button"
          className="w-full bg-yellow-500 text-white text-md py-1 rounded hover:bg-yellow-600 transition-all"
        >
          Logout
        </button>

        <button
          onClick={deleteHandler}
          type="button"
          className="w-full bg-red-500 text-white text-md py-1 rounded hover:bg-red-600 transition-all"
        >
          Delete Account
        </button>
      </form>
    </div>

  )
}

export default Setting 