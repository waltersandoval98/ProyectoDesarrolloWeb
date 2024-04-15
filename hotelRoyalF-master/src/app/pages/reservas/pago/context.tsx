import {createContext, useState, ReactNode, useEffect} from 'react'
import {GetRoute, PostRoute} from '../../../services/private'

interface ContentContextType {
  toggleModal: (data: number) => void
  show: boolean
  allData: Array<any>
  handleClose: () => void
  postStorePersonas:(data:any) => void
  step: string;
  setStep: (step: string) => void;
  checkInput: Array<any>;
  setCheckInput: (input: Array<any>) => void;
  texto: string;
  oneData: any;
  creaetUpdate: (data: any) => Promise<void>;
  storeCreaetUpdate: (data: any) => Promise<void>;
  handleShow: () => void;
  labelData: Array<{ value: string; label: string }>;
  setLabelData: (data: Array<{ value: string; label: string }>) => void;
  handleSelect: (value: string) => void;
  state: (data: any) => Promise<void>;
  one: (data: any) => Promise<any>;
}
type caracteristicasPersona = {
  id: number
  nombre: string
  imagen: string
}
export const ContentContext = createContext<ContentContextType>({} as ContentContextType)

export const ContentProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [show, setShow] = useState<boolean>(false)
  const [oneData, setOneData] = useState<Array<any>>([])
  const [opcion, setOpcion] = useState<number>(0)
  const [allData, setAllData] = useState<Array<any>>([])
  const [step, setStep] = useState('0');
  const [checkInput, setCheckInput] = useState([]);
  const [labelData, setLabelData] = useState<Array<{ value: string; label: string }>>([]);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const toggleModal = (data: number) => {
    setOpcion(data)
    setStep('0')
    if (data === 1) {
      volver('1');
      setOneData([])
    }
    setShow(!show)
  }

  const all = async () => {
    const response = await GetRoute('Reserva/all');
    setAllData(response.data);
  };

  // const getAllPersonas = async () => {
  //   const response = await GetRoute('Persona/all')
  //   setAllData(response.data)
  //   console.log(response)
  // }

  const handleSelect = (value: string) => {
    console.log(`Seleccionaste: ${value}`);
  };

  useEffect(() => {
    const fetchLabelData = async () => {
      try {
        const response = await GetRoute('Habitaciones/label');
        if (response.response === 1 && response.data) {
          setLabelData(response.data);
        }
      } catch (error) {
        console.error('Error al obtener opciones: ', error);
      }
    };

    fetchLabelData();
  }, []);

  const creaetUpdate = async (data: any) => {
    const response = await PostRoute(`Reserva/${!data?.id ? 'create' : 'update'}`, {...data, usuario:'81816', persona:2});
    all();
    handleClose();
    console.log(response.message);
};


  const one = async (data: any) => {
    const response = await PostRoute('Reserva/one', data);
    setOneData(response.length > 0 ? response[0] : []);
    handleShow();
  };

  const state = async (data: any) => {
    const response = await PostRoute(`Reserva/${data?.estado === 1 ? 'destroy' : 'active'}`, data);
    console.log(response.message);
    all();
  };

  const volver = (stp: string) => {
    setStep(stp);
    setCheckInput([]);
  };

  const storeCreaetUpdate = async (data: any) => {
    const response = await PostRoute(`Reserva/${!data?.id ? 'create' : 'update'}`, {...data, usuario:'81816'});
    all();
    handleClose();
    console.log(response.message);
};


  const storeOne = async (data: any) => {
    const response = await PostRoute('Reserva/one', data);
    setOneData(response.length > 0 ? response[0] : []);
    handleShow();
  };

  const storeState = async (data: any) => {
    const response = await PostRoute(`Reserva/${data?.estado === 1 ? 'destroy' : 'active'}`, data);
    console.log(response.message);
    all();
  };
  const value: any = {
    toggleModal,
    volver,
    setStep,
    setCheckInput,
    setOpcion,
    handleShow,
    handleClose,
    // postStorePersonas,
    creaetUpdate,
    state,
    one,  
    setLabelData,
    handleSelect,
    storeState,
    storeOne,
    storeCreaetUpdate,
    oneData,
    opcion,
    show,
    allData,
    labelData,
  }
  useEffect(() => {
    all();
  }, []);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
