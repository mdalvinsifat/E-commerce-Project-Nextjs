'use client'
import { createContext, useContext, useEffect, useState } from "react"

const CardAmmount = createContext()




const CardAmountContext = ({children}) =>{
    const [cardamount , setcardamount ] = useState([])
    
    useEffect(() =>{

        let extingUser = localStorage.getItem("card")
        if(extingUser)setCard(JSON.parse(extingUser))
    },[])
    return(
        <CardAmmount.Provider value={[cardamount, setcardamount]}>
            ({children})
        </CardAmmount.Provider>
    )
}

const useCard  = ()=> useContext(CardAmmount)

export {useCard, CardAmountContext};