import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const {user} = useSelector((state) => state.userReducer)
  return (
    <div className='nav w-full flex gap-x-30 items-center justify-center mb-10 font-medium'>
      <img className='img h-10' src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="" />
        <NavLink className={(e) => e.isActive ? 'bg-red-400 rounded-md px-4' : ''} to='/'>
           Home 
        </NavLink>
        {user ?  (
        <>
            <NavLink className={(e) => e.isActive ? 'bg-red-400 rounded-md px-4' : ''} to='/settings'>
           user settings 
        </NavLink>
         {user?.isAdmin && (
           <NavLink className={(e) => e.isActive ? 'bg-red-400 rounded-md px-4' : ''} to='/createproduct'>
           create products
        </NavLink>
        )}
         <NavLink className={(e) => e.isActive ? 'bg-red-400 rounded-md px-4' : ''} to='/carts'>
           carts
        </NavLink>
        </>
  ) : (
     <NavLink className={(e) => e.isActive ? 'bg-red-400 rounded-md px-4' : ''} to='/signin'>
           signin
        </NavLink>
  )
        }
        
          <NavLink className={(e) => e.isActive ? 'bg-red-600' : ''} to='/about'>
            About
        </NavLink>
    </div>
  )
}

export default Nav 