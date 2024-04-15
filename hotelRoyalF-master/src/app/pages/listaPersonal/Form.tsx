import {Fragment, useContext, useEffect, useState} from 'react'
import {ContentContext} from './context'
import {useForm, Controller} from 'react-hook-form'
import {Row, Col, Button, Form, Modal} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const Formulario = () => {
  const {handleClose,creaetUpdate, oneData,} = useContext(ContentContext)
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
      creaetUpdate({...data, id: oneData?.id || null})
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
          <Row>
        <Col md={4} sm={12}>
          <p>Primer Nombre</p>
          <Form.Group controlId='nombre1'>
            <Form.Control
              type='text'
              placeholder='Primer Nombre'
              {...register('nombre1', {
                required: 'Este campo es requerido',
              })}
            />
            {/* {errors.campo1 && <p>{errors.campo1.message}</p>} */}
          </Form.Group>
        </Col>
        <Col md={4} sm={12}>
          <p>Segundo Nombre</p>
          <Form.Group controlId='nombre2'>
            <Form.Control
              type='text'
              placeholder='Segundo Nombre'
              {...register('nombre2', {
                // required: 'Este campo es requerido',
              })}
            />
            {/* {errors.campo2 && <p>{errors.campo2.message}</p>} */}
          </Form.Group>
        </Col>
        <Col md={4} sm={12}>
          <p>Tercer Nombre</p>
          <Form.Group controlId='campo3'>
            <Form.Control
              type='text'
              placeholder='Tercer Nombre'
              {...register('nombre3', {
                // required: 'Este campo es requerido',
              })}
            />
            {/* {errors.campo3 && <p>{errors.campo3.message}</p>} */}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={12}>
          <p>Primer Apellido</p>
          <Form.Group controlId='ape1'>
            <Form.Control
              type='text'
              placeholder='Primer Apellido'
              {...register('apellido1', {
                required: 'Este campo es requerido',
              })}
            />
            {/* {errors.ape1 && <p>{errors.ape1.message}</p>} */}
          </Form.Group>
        </Col>
        <Col md={4} sm={12}>
          <p>Segundo Apellido</p>
          <Form.Group controlId='ap2'>
            <Form.Control
              type='text'
              placeholder='Segundo Apellido'
              {...register('apellido2', {
                required: 'Este campo es requerido',
              })}
            />
            {/* {errors.ap2 && <p>{errors.ap2.message}</p>} */}
          </Form.Group>
        </Col>
        {/* <Col md={4} sm={12}>
          <p>Apellido de casada</p>
          <Form.Group controlId='apec'>
            <Form.Control
              type='text'
              placeholder='Apellido de casada'
              {...register('apec', {
                required: 'Este campo es requerido',
              })}
            />
          </Form.Group>
        </Col> */}
      </Row>

      <Row>
        <Col md={4} sm={12}>
          <p>No. Dpi</p>
          <Form.Group controlId='dpi'>
            <Form.Control
              type='number'
              placeholder='No. Dpi'
              {...register('dpi', {
                required: 'Este campo es requerido',
              })}
            />
            {/* {errors.dpi && <p>{errors.dpi.message}</p>} */}
          </Form.Group>
        </Col>
        <Col md={4} sm={12}>
          <p>No. Nit</p>
          <Form.Group controlId='nit'>
            <Form.Control
              type='number'
              placeholder='No. Nit'
              {...register('nit', {
                required: 'Este campo es requerido',
              })}
            />
            {/* {errors.nit && <p>{errors.nit.message}</p>} */}
          </Form.Group>
        </Col>
        <Col>
          <Col lg={6} sm={12}>
            <p>Fecha nacimiento</p>
            <Form.Group controlId='fech'>
              {/* <Form.Label>Fecha Ingreso</Form.Label> */}
              <Form.Control type="date" {...register('fechaNacimiento')} />
            </Form.Group>
          </Col>
        </Col>
      </Row>

      <Row>
        {/* <Col lg={6} sm={12}>
          <p>Seleccione la Habitacion</p>
          <Form.Group controlId='habi'>
            <Form.Control as='select' {...register('habi', { required: 'Este campo es requerido' })}>
              <option value=''>Selecciona una Habitacion</option>
              <option value='opcion1'>Opción 1</option>
              <option value='opcion2'>Opción 2</option>
              <option value='opcion3'>Opción 3</option>
            </Form.Control>
            
          </Form.Group>
        </Col> */}
        {/* <Col md={4} sm={12}>
          <p>Estado Civil</p>
          <Form.Group controlId='estado'>
            <Form.Control
              type='text'
              placeholder='Estado Civil'
              {...register('estado', {
                required: 'Este campo es requerido',
              })}
            />
            
          </Form.Group>
        </Col> */}
      </Row>
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

export default Formulario
