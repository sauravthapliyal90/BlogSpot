import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authServices from './appwrite/auth'
import { login, logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() =>{
    authServices.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between'></div>
    </>
  )
}

export default App
