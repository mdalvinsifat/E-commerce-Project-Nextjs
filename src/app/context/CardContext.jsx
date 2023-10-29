'use client'
import { createContext, useContext, useEffect, useState } from "react"

const CardContext = createContext()




const CardProvider = ({children}) =>{
    const [card, setCard ] = useState([])
    
    useEffect(() =>{

        let extingUser = localStorage.getItem("card")
        if(extingUser)setCard(JSON.parse(extingUser))
    },[])
    return(
        <CardContext.Provider value={[card, setCard]}>
            ({children})
        </CardContext.Provider>
    )
}

const useCard  = ()=> useContext(CardContext)

export {useCard, CardProvider};