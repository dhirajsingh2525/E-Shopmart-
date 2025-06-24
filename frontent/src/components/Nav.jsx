import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const {user} = useSelector((state) => state.userReducer)
  return (
    <div className='nav w-full px-5 flex flex-wrap items-center justify-between font-semibold text-lg py-2 shadow bg-white'>
      <img className='img h-10' src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="" />
       <div className='nav1 flex gap-x-22'>
         <NavLink className={(e) => e.isActive ? 'bg-red-200 rounded-md' : ''} to='/'>
           Home 
        </NavLink>
        {user ?  (
        <>
            <NavLink className={(e) => e.isActive ? 'bg-red-200 rounded-md' : ''} to='/settings'>
           Account setting
        </NavLink>
         {user?.isAdmin && (
           <NavLink className={(e) => e.isActive ? 'bg-red-200 rounded-md' : ''} to='/createproduct'>
           create products
        </NavLink>
        )}
         <NavLink className={(e) => e.isActive ? 'bg-red-200 rounded-md' : ''} to='/carts'>
           carts
        </NavLink>
        </>
  ) : (
     <NavLink className={(e) => e.isActive ? 'bg-red-200 rounded-md' : ''} to='/signin'>
           signin
        </NavLink>
  )
        }
        
          <NavLink className={(e) => e.isActive ? 'bg-red-200' : ''} to='/about'>
            About
        </NavLink>
       </div>
    </div>
  )
}

export default Nav 