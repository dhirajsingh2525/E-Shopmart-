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
    <div>
        <form onSubmit={handleSubmit(updateHandler)} className='setting p-5 ww-full'>
           <input
           {...register("username")}
            type="text"
            placeholder='username'
            className='w-full text-3xl border-b outline-0 p-2 mb-5'
            />
             <input
           {...register("email")}
            type="email"
            placeholder='useremail'
            className='w-full text-3xl border-b outline-0 p-2 mb-5'
            />
             <input
           {...register("password")}
            type="password"
            placeholder='userpassword'
            className='w-full text-3xl border-b outline-0 p-2 mb-5'
            />
            <button className='setting1 text-white text-3xl px-5 py-3 rounded bg-blue-400'>
                updated user
                </button>
                <button onClick={logoutHandler}
                 type='button'
                  className='setting1 text-white text-3xl px-5 py-3 rounded bg-red-400'>
                    Logout user
                </button>
                <br /> <br />
                <button onClick={deleteHandler}
                 type='button' 
                className='setting1 text-white text-3xl px-5 py-3 rounded bg-red-600'>
                    delete user
                </button>
        </form>
    </div>
  )
}

export default Setting 