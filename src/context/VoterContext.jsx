import React, { useState } from "react";



const VoterContext = React.createContext();

const VoterContextProvider =({children})=>{

    const [user,setUser]=useState(null)

    return(
        <VoterContext.Provider value={{user,setUser}} >
        {children}
        </VoterContext.Provider>

    )
        

    
}

export {VoterContext,VoterContextProvider};