import React from 'react'
import { VoterContextProvider } from './context/VoterContext'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import {Toaster} from "react-hot-toast"
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <div>

<VoterContextProvider>
<Toaster/>
<BrowserRouter basename='/voting-system'>
<Routes>
<Route path='/' element={<Layout/>}>
<Route  index element={<Home/>} />
<Route path="profile" element={<Profile/>} />
<Route path="registration" element={<Registration/>} />

</Route>

</Routes>
</BrowserRouter>

</VoterContextProvider>


      </div>
     
    </>
  )
}

export default App
