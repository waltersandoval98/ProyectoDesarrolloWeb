import { createContext, useState } from 'react'

export const LoadingContext = createContext()

export const LoadingProvider = ({children}) =>{
    const [showLoad, setShowLoad] = useState(false)
    return(
        <LoadingContext.Provider value={{showLoad, setShowLoad}}>
            { children }
        </LoadingContext.Provider>
    )
}