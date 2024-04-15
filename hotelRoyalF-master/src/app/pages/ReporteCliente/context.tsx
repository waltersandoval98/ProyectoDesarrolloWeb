import { createContext, FC, ReactNode, useState, useEffect } from 'react';
import { GetRoute, PostRoute } from '../../services/private';

type Props = {
  children?: ReactNode;
};
interface Data {
  IdPersona: number;
  Nombrecliente: String;
  habitacion: String;
  sumaPrecio: String;
  //CantidaVisitas: String;
  Total: String;
  // Total: number;
  // fecha: String;
  // nombrePersona: String;
  idEstado: number;

  codigo: String;
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
  handleShow: () => void;
  labelData: Array<{ value: string; label: string }>;
  setLabelData: (data: Array<{ value: string; label: string }>) => void;
  handleSelect: (value: string) => void;
  // state: (data: any) => Promise<void>;
  one: (data: any) => Promise<any>;
  Actions: (data: Data) => Promise<void>;
}

export const ContentContext = createContext<ContentContextType>({} as ContentContextType);

export const ContentProvider: FC<Props> = ({ children }) => {
  const texto: string = 'Bienvenido Context';
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState<any[]>([]);
  const [oneData, setOneData] = useState<any>([]);
  const [opcion, setOpcion] = useState<number>(0);
  const [labelData, setLabelData] = useState<Array<{ value: string; label: string }>>([]);


  const all = async () => { //Rolall
    const response = await GetRoute('Reporte/R1');
    setAllData(response.data);
  };

  const handleSelect = (value: string) => {
    console.log(`Seleccionaste: ${value}`);
  };

  useEffect(() => {
    const fetchLabelData = async () => {
      try {
        const response = await GetRoute('Rol/label');
        if (response.response === 1 && response.data) {
          setLabelData(response.data);
        }
      } catch (error) {
        console.error('Error al obtener opciones: ', error);
      }
    };

    fetchLabelData();
  }, []);

  const toggleModal = (data: number) => {
    setOpcion(data);
    if (data === 1) {
      setOneData([]);
    }
    setShow(!show);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const creaetUpdate = async (data: any) => {
    const response = await PostRoute(`Rol/${!data?.id ? 'create' : 'update'}`, {...data, usuario:'81816'});
    all();
     handleClose();
    console.log(response.message);
};


  const one = async (data: any) => {
    const response = await PostRoute('Reporte/R1', {id:data.id});
    //const response = await PostRoute('Reporte/R8', {Factura: data.id}); ////
    setOneData(response.data.length? response.data[0]:[]);
    handleShow();
  };

  // const state = async (data: any) => {
  //   const response = await PostRoute(`Rol/${data?.estado === 1 ? 'destroy' : 'active'}`, data);
  //   console.log(response.message);
  //   all();
  // };
  const Actions = async (data:any) => {
    const response = await PostRoute(`Rol/status`, {
      id: data.id,
      codigo: data.codigo,
      estado: data.idEstado === 1 ? 0 : 1,
    })
    all();
  };

  const value = {
    show,
    texto,
    allData,
    oneData,
    opcion,
    labelData,
    handleClose,
    creaetUpdate,
    handleShow,
    toggleModal,
    // state,
    one,  
    setLabelData,
    handleSelect,
    Actions,
  };

  useEffect(() => {
    all();
  }, []);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};
