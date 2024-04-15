import {createContext, FC, ReactNode, useState, useEffect} from 'react'
// import {GetRoute, PostRoute} from '../../services/private'
type Props = {
  children?: ReactNode
  
}

export const ContentContext = createContext<any | null>(null)

export const ContentProvider: FC<Props> = ({children}) => {

const [useAuth, setUserAuth] = useState('PRUEBA')

  const value = {
    useAuth
  }


  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

