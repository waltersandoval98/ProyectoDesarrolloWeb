import {Fragment, useContext, useEffect, useState} from 'react'
import {ContentContext} from './context'
import {useForm, Controller} from 'react-hook-form'
import {Row, Col, Button, Form, Modal} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Example from './pago/form'

export const Formulario = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const {handleClose,creaetUpdate, oneData,labelData} = useContext(ContentContext)
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
      creaetUpdate({ ...data, id: oneData?.id || null, habitacion: selectedValue })
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
          <Modal.Title className='text-uppercase h1'>Reservaciones</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
          <Row>
          <Col lg={6} sm={12}>
                <p>Habitacion</p>
                <Form.Group controlId="habitacion">
                  <Form.Control as="select" {...register('habitaciones')}>
                    <option value="">Selecciona una habitacion</option>
                    {labelData.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
      </Row>

      <Row>
        <Col>
          <Col lg={6} sm={12}>
            <p>Fecha Ingreso</p>
            <Form.Group controlId='fech'>
              {/* <Form.Label>Fecha Ingreso</Form.Label> */}
              <Form.Control type="date" {...register('fechaIngreso')} />
            </Form.Group>
          </Col>
        </Col>
        <Col>
          <Col lg={6} sm={12}>
            <p>Fecha Salida</p>
            <Form.Group controlId='fech'>
              {/* <Form.Label>Fecha Ingreso</Form.Label> */}
              <Form.Control type="date" {...register('fechaSalida')} />
            </Form.Group>
          </Col>
        </Col>
      </Row>
        <Col>
          <Form.Group controlId="textarea">
            <Form.Label>Comentario</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Ingrese su mensaje" {...register('comentario')} />
          </Form.Group>
        </Col>
      <Row>
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
