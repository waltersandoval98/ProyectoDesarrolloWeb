import { createContext, FC, useContext, ReactNode, useState, useEffect } from 'react';
import { GetRoute, PostRoute } from '../../services/private';
import { LoadingContext } from '../../../utilitis/Loading/provider';

type Props = {
  children?: ReactNode;
};
interface Data {
  id: number;
  idEstado: number;
  // Otras propiedades si es necesario
}

interface ContentContextType {
  toggleModal: (data: number) => void;
  show: boolean;
  texto: string;
  allData: any[];
  oneData: any;
  handleClose: () => void;
  creaetUpdate: (data: any) => Promise<void>;
  Actions: (data: Data) => Promise<void>;
  handleShow: () => void;
  labelData: Array<{ value: string; label: string }>;
  setLabelData: (data: Array<{ value: string; label: string }>) => void;
  handleSelect: (value: string) => void;
  state: (data: any) => Promise<void>;
  one: (data: any) => Promise<any>;
  oneUpdate: (data: any) => Promise<any>;
}

export const ContentContext = createContext<ContentContextType>({} as ContentContextType);

export const ContentProvider: FC<Props> = ({ children }) => {
  const texto: string = 'Bienvenido Context';
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState<any[]>([]);
  const [oneData, setOneData] = useState<any>([]);
  const [opcion, setOpcion] = useState<number>(0);
  const [labelData, setLabelData] = useState<Array<{ value: string; label: string }>>([]);

  const toggleModal = (data: number) => {
    setOpcion(data);
    if (data === 1) {
      setOneData([]);
    }
    setShow(!show);
  };

  const all = async () => {
    try {
      const response = await GetRoute('Genero/all');
      if (response.response === 1 && response.data) {
        setAllData(response.data);
      }
    } catch (error) {
      console.error('Error al obtener datos: ', error);
    }
  };

  const handleSelect = (value: string) => {
    console.log(`Seleccionaste: ${value}`);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const creaetUpdate = async (data: any) => {
    try {
      const response = await PostRoute(`Genero/${!data?.id ? 'create' : 'update'}`, { ...data, usuario: '81816' });
      if (response.response === 1) {
        all();
      }
      handleClose();
      console.log(response.message);
    } catch (error) {
      console.error('Error al crear o actualizar: ', error);
    }
  };

  const one = async (row: any) => {
    const response = await PostRoute('Genero/one',{id:row.id} );
    setOneData(response.data.length? response.data[0]:[]); //validacion para ver si data trae algo lo va mostrar desde la posicion 0 de lo contrario muestra un arreglo vacio
    console.log(response);
    console.log(row.id);
    handleShow();
  };

  const oneUpdate = async (row: any) => {
    const response = await PostRoute('Genero/one',{id:row.id});
    setOneData(response.data.length? response.data[0]: []);
    handleShow();
  }

  // const One = async (data: any, opcion: number) => {
  //   // setShowLoad(true)
  //   const response = await PostRoute('Genero/one', data))
  //   setOneData(response.data.length ? response.data[0] : [])
  //   toggleModal(opcion)
  //   // setShowLoad(false)
  // },

  const state = async (data: any) => {
    try {
      const response = await PostRoute(`Genero/${data?.estado === 1 ? 'destroy' : 'active'}`, data);
      if (response.response === 1) {
        all();
        console.log(response.message);
      } else {
        console.error('Error al cambiar el estado: ', response.message);
      }
    } catch (error) {
      console.error('Error al cambiar el estado: ', error);
    }
  };

  const Actions = async (data:any) => {
    const response = await PostRoute(`Genero/status`, {
      id: data.id,
      estado: data.idEstado === 1 ? 0 : 1,
    })
    all();
  };
  console.log(oneData,"SOY EL ONE DATA")

  const value = {
    show,
    texto,
    allData,
    oneData,
    opcion,
    handleClose,
    creaetUpdate,
    handleShow,
    toggleModal,
    state,
    Actions,
    one,
    oneUpdate,
    labelData,
    setLabelData,
    handleSelect,
  };

  useEffect(() => {
    all();
  }, []);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};
