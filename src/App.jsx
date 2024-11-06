import React from 'react'
import { VoterContextProvider } from './context/VoterContext'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import {Toaster} from "react-hot-toast"



function App() {
  

  return (
    <>
      <div>

<VoterContextProvider>
<Toaster/>
<Registration/>
<Profile/>
</VoterContextProvider>


      </div>
     
    </>
  )
}

export default App
