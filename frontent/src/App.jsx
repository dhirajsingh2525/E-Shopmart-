import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'
import { useDispatch, useSelector } from 'react-redux'
import { asynccurrentuser } from './store/actions/userActions'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userReducer)

  useEffect(() => {
    !user && dispatch(asynccurrentuser())
  }, [user])

  return (
    <div className='bg-zinc-50'>
      <Nav/>
      <Mainroutes />
      <ToastContainer />
    </div>

  )
}

export default App