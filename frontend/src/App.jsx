import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSinup from './pages/UserSignup'
import CaptianLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import Start from './pages/start'
import Home from './pages/home'
import UserProtectedWrapper from './pages/userProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/captainHome'
import CaptainProtectedWrapper from './pages/captainProtectedWrapper'
import CaptainLogout from './pages/captainLogout'


const App = () => {

  
  return (
    <div >
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSinup/>} />
        <Route path="/captain-login" element={<CaptianLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/home" element={
        <UserProtectedWrapper>
        <Home/>
        </UserProtectedWrapper>
        } />

        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        } />

        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
         </CaptainProtectedWrapper>
        } />

        <Route path="/captain/logout" element={
          <CaptainProtectedWrapper>
            <CaptainLogout/>
          </CaptainProtectedWrapper>
        } />
        
      </Routes>
    </div>
  )
}

export default App
