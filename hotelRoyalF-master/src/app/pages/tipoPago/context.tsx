import { createContext, FC, ReactNode, useState, useEffect } from 'react';
import { GetRoute, PostRoute } from '../../services/private';
import useSWR, { mutate } from 'swr';

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


  // const all = async () => {
  //   const response = await GetRoute('TipoPago/all');
  //   setAllData(response.data);
  // };

  ////////////////////////////////////////////////////////////////
const fetcher = (url: string) => GetRoute(url);
const apiKeyAll = 'TipoPago/all';
const apiKeyLabel = 'TipoPago/label';

const { data: allDataFromSWR } = useSWR(apiKeyAll, fetcher);
const { data: labelDataFromSWR } = useSWR(apiKeyLabel, fetcher);

useEffect(() => {
  if (allDataFromSWR && allDataFromSWR.value === 1) {
    setAllData(allDataFromSWR.data)
  }
}, [allDataFromSWR])

useEffect(() => {
  if (labelDataFromSWR && labelDataFromSWR.value === 1) {
    setLabelData(labelDataFromSWR.data)
  }
}, [labelDataFromSWR])


////////////////////////////////////////////////////////////////

  const handleSelect = (value: string) => {
    console.log(`Seleccionaste: ${value}`);
  };

  useEffect(() => {
    const fetchLabelData = async () => {
      try {
        const response = await GetRoute('TipoPago/label');
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
    const response = await PostRoute(`TipoPago/${!data?.id ? 'create' : 'update'}`, {...data, usuario:'81816'});
    // all();
    handleClose();
    console.log(response.message);
    mutate(apiKeyAll);
};


  const one = async (data: any) => {
    const response = await PostRoute('TipoPago/one', {id: data.id});
    setOneData(response.data.length ? response.data[0] : []);
    handleShow();
  };

  const Actions = async (data:any) => {
    const response = await PostRoute(`TipoPago/status`, {
      id: data.id,
      estado: data.idEstado === 1 ? 0 : 1,
    })
    mutate(apiKeyAll);
    // all();
  };

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
    Actions,
    one,
    labelData,
    setLabelData,
    handleSelect,
  };

  // useEffect(() => {
  //   all();
  // }, []);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};
