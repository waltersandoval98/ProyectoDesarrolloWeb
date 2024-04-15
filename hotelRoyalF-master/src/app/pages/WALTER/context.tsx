import { createContext, FC, ReactNode, useState, useEffect } from 'react'
import { GetRoute } from '../../services/private'

type Props = {

    children?: ReactNode
}




export const ContentContext = createContext<any | null>(null)

export const ContentProvider: FC<Props> = ({ children }) => {
    const texto: String = 'Hola Context'
    const [show, setShow] = useState(false);
    const [allData, setAllData] = useState<any>([])

    //creacion del all
    const all = async() => {
        const response = await GetRoute('Genero/all')
        console.log(response)
        setAllData(response)

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //carga en consola del all muestra de datos 
    console.log('primera carga')


    const value = {
        show,
        texto,
        allData,
        handleClose,
        handleShow,


    }
    //nos sirve para que cada vez que la pantalla se actualice se refresque
    useEffect(() => {
        all()
    }, [])

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}