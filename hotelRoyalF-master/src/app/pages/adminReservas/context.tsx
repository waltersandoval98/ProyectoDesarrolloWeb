import {createContext, useState, ReactNode} from 'react'

interface ContentContextType {
  toggleModal: (data: number) => void
  show: boolean;
  allData: Array<any>;
  allData2: Array<any>;
}

type caracteristicasReserva = {
  tipoHabitacion: string
  estado: string
}
type nivelReserva = {
  tipoHabitacion: string
  estado: string
}
export const ContentContext = createContext<ContentContextType>({} as ContentContextType)

export const ContentProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [show, setShow] = useState<boolean>(false)
  const [oneData, setOneData] = useState<Array<any>>([])
  const [opcion, setOpcion] = useState<number>(0)
  const allData: caracteristicasReserva [] =  [
    {
      tipoHabitacion: 'Single Room',
      estado: 'Activo',
    },
    {
      tipoHabitacion: 'Double Room',
      estado: 'Inactivo',
    },
    {
      tipoHabitacion: 'Suite',
      estado: 'Activo',
    },
  ]

  const allData2: nivelReserva [] =  [
    {
      tipoHabitacion: 'Primer Nivel',
      estado: 'Activo',
    },
    {
      tipoHabitacion: 'Segundo Nivel',
      estado: 'Inactivo',
    },
    {
      tipoHabitacion: 'Tercer Nivel',
      estado: 'Activo',
    },
  ]

  const toggleModal = (data: number) => {
    setOpcion(data)
    if (data === 1) {
      setOneData([])
    }
    setShow(!show)
  }

  const value: any = {
    toggleModal,
    setOpcion,
    oneData,
    opcion,
    show,
    allData,
    allData2
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
