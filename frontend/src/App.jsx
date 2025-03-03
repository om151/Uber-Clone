import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSinup from './pages/UserSignup'
import CaptianLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'


const App = () => {

  const ans = useContext(UserDataContext);
  console.log(ans);
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSinup/>} />
        <Route path="/captain-login" element={<CaptianLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App
