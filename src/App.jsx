import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Loader } from "lucide-react"

function App() {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin"></Loader>
    </div>
  )


  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login"></Navigate>} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/"></Navigate>} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/"></Navigate>} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login"></Navigate>} />
      </Routes>
    </div>
  )
}

export default App
