import {Fragment, useContext, useEffect, useState} from 'react'
import {ContentContext} from './context'
import {useForm, Controller} from 'react-hook-form'
import {Row, Col, Button, Form, Modal,Tabs, Tab } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Formulario from './Form'
import DatosEmpleado from './datosEmpleado'

export const FormularioP = () => {
  const {handleClose, postStorePersonas,setStep,step} = useContext(ContentContext)
  const {
      register,
      handleSubmit,
      formState: {errors},
      control,
      setValue,
      reset,
    } = useForm(),
    {toggleModal, show} = useContext(ContentContext),
    onSubmit = (data: any) => {
      postStorePersonas({...data})
    },
    setData = async () => {}

  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <Fragment>
      <Button variant='primary' className='btn-icon' size='sm' onClick={() => toggleModal(1)}>
        +
      </Button>

      <Modal
        show={show}
        onHide={() => toggleModal(0)}
        size='lg'
        backdrop='static'
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-uppercase h1'>Datos Personales</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
            <Tabs
                fill
                activeKey={step}
                className="mb-5"
                id="controlled-tab-example"
                onSelect={(k: any) => setStep(k)}
            >
                <Tab eventKey="0" title="Datos Personales" disabled={step !== "0"}>
                <Formulario />
                </Tab>
                <Tab eventKey="1" title="Datos de Contacto" disabled={step !== "1"}>
                <DatosEmpleado />
                </Tab>
                {/* <Tab eventKey="2" title="Datos Laborales" disabled={step !== "2"}>
                <DatosLaborales />
                </Tab> */}
            </Tabs>
        </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between'>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' type='submit'>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  )
}

export default FormularioP
